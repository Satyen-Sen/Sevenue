import * as React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { NextIntlProvider } from 'next-intl';
import defaultMessages from '../messages/shared/en.json';
import DefaultLayout from '../src/layouts/DefaultLayout';
import { SnackbarProvider } from 'notistack';
import { GlobalProvider } from '../src/store/GlobalContext';
import { useEffect } from 'react';
import restApp, {
  authCookieName,
  cookieStorageGetItem,
  cookieStorageRemoveItem,
  GetEventService,
} from '../src/apis/rest.app';
import 'cropperjs/dist/cropper.css';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Noop = ({ children }) => children;

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, globalProps } = props;
  const { event, preview } = globalProps;
  const Router = useRouter();

  let Layout = DefaultLayout;

  if (typeof Component.Layout !== 'undefined') {
    Layout = Component.Layout ? Component.Layout : Noop;
  }

  const meta = Component.meta || {};

  const updatedMessage = {
    ...defaultMessages,
    ...((pageProps && pageProps.messages) || {}),
  };

  const [eventData, setEventData] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const withOutLivePages = ['/login', '/password', '/not-found'];
  const withOutLoginPages = ['/', '/onboarding', '/register', ...withOutLivePages];

  const checkAccess = (user) => {
    if (event.isLive) {
      if (!user && !withOutLoginPages.includes(Router.pathname)) {
        Router.push('/').then(() => {
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    } else if (withOutLivePages.includes(Router.pathname)) {
      setLoading(false);
    } else if (preview === 'true') {
      setLoading(false);
    } else if (user && user.role === 'host') {
      setLoading(false);
    } else {
      Router.push('/not-found').then(() => {
        setLoading(false);
      });
    }
  };

  useEffect(async () => {
    setLoading(true);
    const token = cookieStorageGetItem(authCookieName);
    setEventData(event);
    if (token) {
      await restApp
        .authenticate({
          strategy: 'jwt',
          accessToken: token,
        })
        .then((res) => {
          if (res) {
            setUser(res?.eventUsers);
            checkAccess(res?.eventUsers);
          }
        })
        .catch(() => {
          cookieStorageRemoveItem(authCookieName);
        });
    } else {
      checkAccess();
    }
  }, []);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    checkAccess(user);
  }, [Router.pathname]);

  return (
    <CacheProvider value={emotionCache}>
      <NextIntlProvider
        // To achieve consistent date, time and number formatting
        // across the app, you can define a set of global formats.
        formats={{
          dateTime: {
            short: {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            },
          },
        }}
        messages={updatedMessage}
        // Providing an explicit value for `now` ensures consistent formatting of
        // relative values regardless of the server or client environment.
        // now={new Date(pageProps.now)}
        // Also an explicit time zone is helpful to ensure dates render the
        // same way on the client as on the server, which might be located
        // in a different time zone.
        // timeZone="UTC"
        timeZone={eventData?.timezone || 'America/Chicago'}
        // timeZone="America/Chicago"
      >
        <SnackbarProvider>
          <GlobalProvider eventData={eventData} userData={user}>
            <Layout
              // error={pageProps.error}
              // loadDefaults={typeof Component.loadDefaults === 'undefined' ? true : Component.loadDefaults}
              meta={meta}
            >
              <React.Fragment>
                {loading ? (
                  <Backdrop
                    component={Box}
                    open={loading}
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                ) : (
                  <Component {...pageProps} />
                )}
              </React.Fragment>
            </Layout>
          </GlobalProvider>
        </SnackbarProvider>
      </NextIntlProvider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  const { ctx } = context;
  const { req, query } = ctx;
  const { preview } = query;
  const { host: hostname } = req.headers;
  const event = await GetEventService.find({
    query: {
      slug: hostname === 'localhost:3000' ? 'red-kite-conference-2022' : hostname.split('.')[0],
    },
  });

  return {
    globalProps: {
      hostname,
      event,
      preview,
    },
  };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
  globalProps: PropTypes.object.isRequired,
};
