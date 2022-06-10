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
import Link from '../src/components/Link';

const ResetPassword = () => {
  const translations = useTranslations();

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [show, setShow] = React.useState(false);
  const handleClickShowPassword = () => {
    setShow(!show);
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
          {translations('reset-password.title')}
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
          {translations('reset-password.description')}
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
          placeholder={translations('reset-password.password')}
          sx={(theme) => ({
            marginTop: theme.spacing(2),
          })}
          type={show ? 'text' : 'password'}
          value={password}
          variant="outlined"
        />
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
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder={translations('reset-password.confirm-password')}
          sx={(theme) => ({
            marginTop: theme.spacing(1),
          })}
          type={show ? 'text' : 'password'}
          value={confirmPassword}
          variant="outlined"
        />
        <Button
          component={Link}
          fullWidth
          href={'/reset-password'}
          size={'large'}
          sx={(theme) => ({
            margin: theme.spacing(1, 0),
            fontSize: '1rem',
            borderRadius: '8px',
            textTransform: 'capitalize',
          })}
          variant={'contained'}
        >
          {translations('reset-password.btn')}
        </Button>
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

ResetPassword.Layout = EventLayout;

export default ResetPassword;
