import * as React from 'react';
import Grid from '@mui/material/Grid';
import SpeakerCard from './SpeakerCard';

const AllSpeakerDetails = () => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {new Array(14).fill(0).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item key={index} md={6} sm={6} xs={12}>
            <SpeakerCard />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default AllSpeakerDetails;
