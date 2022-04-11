import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/components/Link';
import getPageMessages from '../utils/getPageMessages';
import { useTranslations } from 'next-intl';

const Index = () => {
  const translations = useTranslations();
  // const intl = useIntl();
  // const dateTime = intl.formatDateTime(new Date(), {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   second: 'numeric',
  //   timeZoneName: 'short',
  // });

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography component="h1" gutterBottom variant="h4">
          {translations('home.header')}
        </Typography>
        <Link color="secondary" href="/about">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages('index', locale),
    },
  };
};

export default Index;
