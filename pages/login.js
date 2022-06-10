import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import getPageMessages from '../utils/getPageMessages';
import { useTranslations } from 'next-intl';
import EventLayout from '../src/layouts/EventLayout';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';
import Facebook from '../src/assets/login/facebook.svg';
import Google from '../src/assets/login/google.svg';
import Linkedin from '../src/assets/login/linkedin.svg';
import PageWrapper from '../src/components/PageWrapper';
import { useGlobalData } from '../src/store/GlobalContext';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { CheckEmailService } from '../src/apis/rest.app';
import LoadingButton from '@mui/lab/LoadingButton';

const Login = () => {
  const translations = useTranslations();
  const { enqueueSnackbar } = useSnackbar();
  const Router = useRouter();
  const [, , event] = useGlobalData();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    if (email.trim() === '') {
      enqueueSnackbar('Email is required', { variant: 'error' });
      return;
    }
    setLoading(true);
    CheckEmailService.find({
      query: {
        email: email,
        org: event?.org?._id,
      },
    })
      .then((res) => {
        if (res && res.userExists) {
          Router.push(`/password?email=${email}`).then(() => {
            setLoading(false);
          });
        } else {
          Router.push(`/register?email=${email}`).then(() => {
            setLoading(false);
          });
        }
      })
      .catch((err) => {
        enqueueSnackbar((err && err.message) || 'Something went wrong', { variant: 'error' });
        setLoading(false);
      });
  };
  return (
    <PageWrapper>
      <Box sx={{ my: 4, width: '100%' }}>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h3,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '2.2rem',
          })}
          textAlign={'center'}
        >
          {event && event.name}
        </Typography>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h4,
            fontSize: '1rem',
            color: 'text.secondary',
          })}
          textAlign={'center'}
        >
          {translations('title')}
        </Typography>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  marginRight: theme.spacing(1.5),
                })}
              >
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          autoFocus
          fullWidth
          id="email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          placeholder={translations('email')}
          sx={(theme) => ({
            marginTop: theme.spacing(3),
          })}
          type="email"
          value={email}
          variant="outlined"
        />
        <LoadingButton
          fullWidth
          loading={loading}
          onClick={handleClick}
          size={'large'}
          sx={(theme) => ({
            marginTop: theme.spacing(1),
            fontSize: '1rem',
            borderRadius: '8px',
            textTransform: 'capitalize',
          })}
          variant={'contained'}
        >
          {translations('continue')}
        </LoadingButton>
        <Typography
          align={'center'}
          sx={(theme) => ({
            ...theme.typography.h6,
            fontSize: '1rem',
            fontWeight: theme.typography.fontWeightRegular,
            margin: theme.spacing(3, 0),
          })}
        >
          {translations('login-with')}
        </Typography>
        <Box display={'flex'} justifyContent={'center'}>
          <Button
            color={'inherit'}
            sx={(theme) => ({
              minWidth: 0,
              padding: theme.spacing(1),
              margin: theme.spacing(0, 1),
              borderColor: '#d1d1d1',
            })}
            variant={'outlined'}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'Google'} src={Google} />
          </Button>
          <Button
            color={'inherit'}
            sx={(theme) => ({
              minWidth: 0,
              padding: theme.spacing(1),
              margin: theme.spacing(0, 1),
              borderColor: '#d1d1d1',
            })}
            variant={'outlined'}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'Linkedin'} src={Linkedin} />
          </Button>
          <Button
            color={'inherit'}
            sx={(theme) => ({
              minWidth: 0,
              padding: theme.spacing(1),
              margin: theme.spacing(0, 1),
              borderColor: '#d1d1d1',
            })}
            variant={'outlined'}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'facebook'} src={Facebook} />
          </Button>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages('login', locale),
    },
  };
};

Login.Layout = EventLayout;

export default Login;
