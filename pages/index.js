import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/components/Link';
import getPageMessages from '../utils/getPageMessages';
import { useTranslations } from 'next-intl';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import IMG from '../src/assets/landing/temp_logo.png';
import EventDetailCard from '../src/page-components/index/EventDetailCard';

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
      <Box mt={3.5} />
      <Grid container spacing={4}>
        <Grid item md={7} sm={12} xs={12}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="logo" height={'auto'} src={IMG} width={'100%'} />
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <EventDetailCard />
        </Grid>
      </Grid>
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
