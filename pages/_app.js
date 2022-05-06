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

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Noop = ({ children }) => children;

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  let Layout = DefaultLayout;

  if (typeof Component.Layout !== 'undefined') {
    Layout = Component.Layout ? Component.Layout : Noop;
  }

  const meta = Component.meta || {};

  const updatedMessage = {
    ...defaultMessages,
    ...(pageProps.messages || {}),
  };

  const [eventData, setEventData] = React.useState(null);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const token = cookieStorageGetItem(authCookieName);
    const eventDetails = localStorage.getItem('sev-event');
    // todo Also check if slug matches then only set event data stored in localStore
    if (eventDetails) {
      setEventData(JSON.parse(eventDetails));
    }
    GetEventService.find({
      query: {
        slug: 'red-kite-conference-2022',
      },
    }).then((res) => {
      setEventData(res);
      localStorage.setItem('sev-event', JSON.stringify(res));
    });
    if (token) {
      restApp
        .authenticate({
          strategy: 'jwt',
          accessToken: token,
        })
        .then((res) => {
          if (res) {
            setUser(res?.eventUsers);
          }
        })
        .catch(() => {
          cookieStorageRemoveItem(authCookieName);
        });
    }
  }, []);

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
        now={new Date(pageProps.now)}
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
              <Component {...pageProps} />
            </Layout>
          </GlobalProvider>
        </SnackbarProvider>
      </NextIntlProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
