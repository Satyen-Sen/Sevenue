import * as React from 'react';
import getPageMessages from '../utils/getPageMessages';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NotFound from '../src/assets/logo/not_found.svg';
import { useTranslations } from 'next-intl';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const PageNotFound = () => {
  const translations = useTranslations('error.event-not-found');
  return (
    <Container maxWidth={'xs'}>
      <Box alignItems={'center'} display={'flex'} flexDirection={'column'} height={'95vh'} justifyContent={'center'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={'NotFound'} height={'240px'} src={NotFound} width={'344.88px'} />
        <Typography
          sx={(theme) => ({
            ...theme.typography.h1,
            fontSize: '1.7rem',
            fontWeight: theme.typography.fontWeightMedium,
            mt: 5,
          })}
        >
          {translations('title')}
        </Typography>
        <Typography
          align={'center'}
          sx={(theme) => ({
            ...theme.typography.h1,
            fontSize: theme.typography.fontSize,
            color: theme.palette.text.secondary,
            mt: 1,
          })}
        >
          {translations('description', {
            email: 'support@gmail.com',
          })}
        </Typography>
        <Button
          component={Link}
          disableElevation
          href={'https://www.sevenue.com/'}
          sx={(theme) => ({
            mt: 5,
            mb: 5,
            background: '#b8244f',
            textTransform: 'none',
            fontSize: '0.9rem',
            fontWeight: theme.typography.fontWeightMedium,
            padding: theme.spacing(1, 4),
            borderRadius: 2,
            '&:hover': {
              background: '#b8244f',
            },
          })}
          target={'_blank'}
          variant={'contained'}
        >
          {translations('return-to-home')}
        </Button>
      </Box>
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages(undefined, locale),
    },
  };
};

PageNotFound.Layout = null;

export default PageNotFound;
