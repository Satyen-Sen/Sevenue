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
import Link from '../src/components/Link';
import PasswordIcon from '@mui/icons-material/Password';

const ForgotPassword = () => {
  const translations = useTranslations();
  const [Code, setCode] = React.useState('');

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
          {translations('forgot-password.title')}
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
          {translations('forgot-password.description', {
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
                <PasswordIcon />
              </InputAdornment>
            ),
          }}
          autoFocus
          fullWidth
          id="code"
          margin="normal"
          onChange={(e) => setCode(e.target.value)}
          placeholder={translations('forgot-password.placeholder')}
          sx={(theme) => ({
            marginTop: theme.spacing(2),
          })}
          type={'text'}
          value={Code}
          variant="outlined"
        />
        <Button
          component={Link}
          fullWidth
          href={'/reset-password'}
          size={'large'}
          sx={(theme) => ({
            margin: theme.spacing(2, 0),
            fontSize: '1rem',
            borderRadius: '8px',
            textTransform: 'capitalize',
          })}
          variant={'contained'}
        >
          {translations('reset-password.btn')}
        </Button>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h4,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '1rem',
            color: 'text.secondary',
            marginTop: theme.spacing(1),
          })}
        >
          {translations('forgot-password.not-received')}
        </Typography>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h4,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '1rem',
            color: 'primary.main',
          })}
        >
          {translations('forgot-password.email-support', {
            email: 'test.support@test.com',
          })}
        </Typography>
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

ForgotPassword.Layout = EventLayout;

export default ForgotPassword;
