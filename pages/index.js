import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import getPageMessages from '../utils/getPageMessages';
import Grid from '@mui/material/Grid';
import EventDetailCard from '../src/page-components/index/EventDetailCard';
import EventBasicDescription from '../src/page-components/index/EventBasicDescription';

const Index = () => {
  // const [height, setHeight] = React.useState('230px');
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
          <EventBasicDescription />
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
