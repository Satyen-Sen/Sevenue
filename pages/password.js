import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import getPageMessages from '../utils/getPageMessages';
import { useTranslations } from 'next-intl';
import EventLayout from '../src/layouts/EventLayout';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import PageWrapper from '../src/components/PageWrapper';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import Link from '../src/components/Link';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import restApp from '../src/apis/rest.app';
import { useGlobalData } from '../src/store/GlobalContext';
import LoadingButton from '@mui/lab/LoadingButton';

const Password = () => {
  const translations = useTranslations();
  const [, setUser] = useGlobalData();
  const Router = useRouter();
  const { email } = Router.query;
  const { enqueueSnackbar } = useSnackbar();
  const [password, setPassword] = React.useState('');
  const [show, setShow] = React.useState(false);
  const handleClickShowPassword = () => {
    setShow(!show);
  };

  const [checked, setChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleLogin = () => {
    if (password.trim() === '') {
      enqueueSnackbar('Password can not be empty', { variant: 'error' });
      return;
    } else if (checked === false) {
      enqueueSnackbar('You must agree to the terms and conditions', { variant: 'error' });
      return;
    } else {
      setLoading(true);
      restApp
        .authenticate({
          strategy: 'local',
          email,
          password,
        })
        .then((res) => {
          if (res) {
            enqueueSnackbar('Login successfully', { variant: 'success' });
            setUser(res?.eventUsers);
            Router.push('/dashboard').then(() => {
              setLoading(false);
            });
          }
        })
        .catch((err) => {
          enqueueSnackbar((err && err.message) || 'Something went wrong', { variant: 'error' });
          setLoading(false);
        });
    }
  };
  return (
    <PageWrapper>
      <Box sx={{ my: 4, width: '100%' }}>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h3,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '2rem',
          })}
        >
          {translations('password.title')}
        </Typography>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h4,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '1rem',
            color: 'text.secondary',
          })}
        >
          {translations('password.description', {
            email: 'tes...@test.com',
          })}
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
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoFocus
          fullWidth
          id="password"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          placeholder={translations('password.placeholder')}
          sx={(theme) => ({
            marginTop: theme.spacing(3),
          })}
          type={show ? 'text' : 'password'}
          value={password}
          variant="outlined"
        />
        <Box display={'flex'}>
          <Checkbox
            checked={checked}
            inputProps={{ 'aria-label': 'controlled' }}
            label={'label'}
            onChange={handleChange}
            sx={(theme) => ({
              paddingLeft: theme.spacing(0),
              paddingRight: theme.spacing(1),
            })}
          />
          <Typography
            align={'center'}
            sx={(theme) => ({
              ...theme.typography.h6,
              fontSize: '0.9rem',
              fontWeight: theme.typography.fontWeightRegular,
              margin: theme.spacing(1.2, 0),
            })}
          >
            {translations('password.agree')}
          </Typography>
          <Typography
            align={'center'}
            component={Link}
            href={'/terms-and-conditions'}
            sx={(theme) => ({
              ...theme.typography.h6,
              fontSize: '0.9rem',
              fontWeight: theme.typography.fontWeightRegular,
              margin: theme.spacing(1.2, 0.5),
              textDecoration: 'none',
            })}
          >
            {translations('password.terms-and-conditions')}
          </Typography>
          <Typography
            align={'center'}
            sx={(theme) => ({
              ...theme.typography.h6,
              fontSize: '0.9rem',
              fontWeight: theme.typography.fontWeightRegular,
              margin: theme.spacing(1.2, 0),
            })}
          >
            {translations('password.and')}
          </Typography>
          <Typography
            align={'center'}
            component={Link}
            href={'/privacy-policy'}
            sx={(theme) => ({
              ...theme.typography.h6,
              fontSize: '0.9rem',
              fontWeight: theme.typography.fontWeightRegular,
              margin: theme.spacing(1.2, 0.5),
              textDecoration: 'none',
            })}
          >
            {translations('password.privacy-policy')}
          </Typography>
        </Box>
        <Box display={'flex'}>
          <LoadingButton
            fullWidth
            loading={loading}
            onClick={handleLogin}
            size={'large'}
            sx={(theme) => ({
              marginTop: theme.spacing(1),
              marginRight: theme.spacing(1),
              fontSize: '1rem',
              borderRadius: '8px',
              textTransform: 'capitalize',
            })}
            variant={'contained'}
          >
            {translations('login')}
          </LoadingButton>
          <Button
            component={Link}
            fullWidth
            href={'/forgot-password'}
            size={'large'}
            sx={(theme) => ({
              marginTop: theme.spacing(1),
              marginLeft: theme.spacing(1),
              fontSize: '1rem',
              borderRadius: '8px',
              textTransform: 'capitalize',
            })}
          >
            {translations('forgot-password.title')}
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

Password.Layout = EventLayout;

export default Password;
