import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import getPageMessages from '../utils/getPageMessages';
import { useTranslations } from 'next-intl';
import EventLayout from '../src/layouts/EventLayout';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PageWrapper from '../src/components/PageWrapper';
import { useGlobalData } from '../src/store/GlobalContext';
import { useEffect } from 'react';
import restApp, { UsersService } from '../src/apis/rest.app';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Checkbox from '@mui/material/Checkbox';
import Link from '../src/components/Link';
import Grid from '@mui/material/Grid';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';

const Register = () => {
  const translations = useTranslations();
  const Router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { email } = Router.query;
  const [, setUser, event] = useGlobalData();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClickShowPassword = () => {
    setShow(!show);
  };

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const validate = () => {
    if (firstName.trim() === '') {
      enqueueSnackbar('First name is required', { variant: 'error' });
      return false;
    } else if (lastName.trim() === '') {
      enqueueSnackbar('Last name is required', { variant: 'error' });
      return false;
    } else if (password.trim() === '') {
      enqueueSnackbar('Password is required', { variant: 'error' });
      return false;
    } else if (confirmPassword.trim() === '') {
      enqueueSnackbar('Confirm password is required', { variant: 'error' });
      return false;
    } else if (password !== confirmPassword) {
      enqueueSnackbar('Password and confirm password must be same', { variant: 'error' });
      return false;
    } else if (checked === false) {
      enqueueSnackbar('You must agree to the terms and conditions', { variant: 'error' });
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      setLoading(true);
      UsersService.create({
        firstName,
        lastName,
        password,
        email,
        event: event?._id,
        org: event?.org?._id,
      })
        .then(() => {
          restApp
            .authenticate(
              {
                strategy: 'local',
                email,
                password,
              },
              {
                query: {
                  org: event?.org?._id,
                },
              },
            )
            .then((res) => {
              if (res) {
                enqueueSnackbar('User created successfully', { variant: 'success' });
                setUser(res?.eventUsers);
                Router.push('/onboarding');
                setLoading(false);
              }
            })
            .catch((err) => {
              enqueueSnackbar((err && err.message) || 'Something went wrong', { variant: 'error' });
            });
        })
        .catch((err) => {
          enqueueSnackbar((err && err.message) || 'Something went wrong', { variant: 'error' });
        });
    }
  };

  useEffect(() => {
    if (!email) {
      Router.push('/login');
    }
  }, [email]);
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
          {translations('register.title')}
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
          {translations('register.subtitle')}
        </Typography>
        {email && (
          <Typography
            gutterBottom
            sx={(theme) => ({
              ...theme.typography.h4,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '1rem',
              color: 'text.secondary',
              lineHeight: 0.5,
            })}
            textAlign={'center'}
          >
            {email}
          </Typography>
        )}
        <Box mt={4} />
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={6}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={(theme) => ({
                      color: theme.palette.primary.main,
                    })}
                  >
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              autoFocus
              fullWidth
              id="firstName"
              // margin="normal"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={translations('register.firstname')}
              type="text"
              value={firstName}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} sm={6} xs={6}>
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
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              placeholder={translations('register.lastname')}
              type="text"
              value={lastName}
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
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
                    <LockOutlinedIcon />
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
              fullWidth
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder={translations('register.password')}
              type={show ? 'text' : 'password'}
              value={password}
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
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
                    <LockOutlinedIcon />
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
              fullWidth
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={translations('register.confirm-password')}
              type={show ? 'text' : 'password'}
              value={confirmPassword}
              variant="outlined"
            />
          </Grid>
        </Grid>
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
            onClick={handleSubmit}
            size={'large'}
            sx={(theme) => ({
              marginTop: theme.spacing(1),
              fontSize: '1rem',
              borderRadius: '8px',
              textTransform: 'capitalize',
            })}
            variant={'contained'}
          >
            {translations('register.signup')}
          </LoadingButton>
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

Register.Layout = EventLayout;

export default Register;
