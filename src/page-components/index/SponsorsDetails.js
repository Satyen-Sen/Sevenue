import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useTranslations } from 'next-intl';
import Typography from '@mui/material/Typography';
import SponsorsCard from './SponsorsCard';

const SponsorsDetails = () => {
  const translations = useTranslations();
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={12} sm={12} xs={12}>
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '0.9rem',
              // marginBottom: theme.spacing(2),
            })}
          >
            {translations('sponsors.gold-sponsor')}
          </Typography>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <SponsorsCard />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '0.9rem',
              // marginBottom: theme.spacing(2),
            })}
          >
            {translations('sponsors.silver-sponsor')}
          </Typography>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <SponsorsCard />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <SponsorsCard />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '0.9rem',
              // marginBottom: theme.spacing(2),
            })}
          >
            {translations('sponsors.silver-sponsor')}
          </Typography>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <SponsorsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <SponsorsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <SponsorsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <SponsorsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <SponsorsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <SponsorsCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SponsorsDetails;
