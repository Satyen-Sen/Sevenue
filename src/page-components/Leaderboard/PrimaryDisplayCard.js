import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import profile from '../../assets/landing/temp_profile_image.png';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

const PrimaryDisplayCard = () => {
  const translations = useTranslations();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        borderRadius: 1,
        mt: 4,
      })}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mt: 8,
            }}
          >
            <Avatar
              alt="Profile"
              src={profile}
              sx={(theme) => ({
                height: theme.spacing(14),
                width: theme.spacing(14),
                border: 5,
                color: theme.palette.common.white,
                borderRadius: '50%',
              })}
            />
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 2,
                color: theme.palette.common.white,
              })}
            >
              Daniel Gilberg
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h2,
                fontWeight: theme.typography.fontWeightLight,
                fontSize: '12px',
                mt: 1,
                color: theme.palette.common.white,
              })}
            >
              Sales Manager at Brumy
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 3,
                color: '#FECA54',
              })}
            >
              {translations('rank', { count: 2 })}
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightLight,
                fontSize: '14px',
                mt: 1,
                mb: 4,
                color: theme.palette.common.white,
                borderColor: theme.palette.common.white,
                border: 1,
                borderRadius: 1,
                width: '120px',
                height: '40px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              })}
            >
              220 {translations('points')}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <Avatar
              alt={'Profile'}
              src={profile}
              sx={(theme) => ({
                height: theme.spacing(16),
                width: theme.spacing(16),
                border: 5,
                color: theme.palette.common.white,
                borderRadius: '50%',
              })}
            />
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 2,
                color: theme.palette.common.white,
              })}
            >
              Abdel Latif
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h2,
                fontWeight: 300,
                fontSize: '12px',
                mt: 1,
                color: theme.palette.common.white,
              })}
            >
              CEO at XYZ.co
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 3,
                color: '#FECA54',
              })}
            >
              {translations('rank', { count: 1 })}
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightLight,
                fontSize: '14px',
                mt: 1,
                mb: 4,
                color: theme.palette.common.white,
                backgroundColor: '#f52b60',
                borderColor: theme.palette.common.white,
                border: 1,
                borderRadius: 1,
                width: '120px',
                height: '40px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              })}
            >
              247 {translations('points')}
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={4} xs={4}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mt: 8,
            }}
          >
            <Avatar
              alt={'Profile'}
              src={profile}
              sx={(theme) => ({
                height: theme.spacing(14),
                width: theme.spacing(14),
                border: 5,
                color: theme.palette.common.white,
                borderRadius: '50%',
              })}
            />
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 2,
                color: theme.palette.common.white,
              })}
            >
              Shasha Braus
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h2,
                fontWeight: 300,
                fontSize: '12px',
                mt: 1,
                color: theme.palette.common.white,
              })}
            >
              Entrepreneur at JJCM
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 3,
                color: '#FECA54',
              })}
            >
              {translations('rank', { count: 3 })}
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightLight,
                fontSize: '14px',
                mt: 1,
                mb: 4,
                color: theme.palette.common.white,
                borderColor: theme.palette.common.white,
                border: 1,
                borderRadius: 1,
                width: '120px',
                height: '40px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              })}
            >
              209 {translations('points')}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrimaryDisplayCard;
