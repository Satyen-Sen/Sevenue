import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import profile from '../../assets/landing/temp_profile_image.png';
import Typography from '@mui/material/Typography';

const PrimaryDisplayCard = () => {
  return (
    <Box sx={{ backgroundColor: '#b8244f', borderRadius: 1, mt: 4 }}>
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
                color: 'background.paper',
                borderRadius: '50%',
              })}
            />
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 2,
                color: 'background.paper',
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
                color: 'background.paper',
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
                color: '#FEC954',
              })}
            >
              Rank 02
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightLight,
                fontSize: '14px',
                mt: 1,
                mb: 4,
                color: 'background.paper',
                borderColor: 'background.paper',
                border: 1,
                borderRadius: 1,
                width: '120px',
                height: '40px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              })}
            >
              220 Points
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
                color: 'background.paper',
                borderRadius: '50%',
              })}
            />
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 2,
                color: 'background.paper',
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
                color: 'background.paper',
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
                color: '#FEC954',
              })}
            >
              Rank 01
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightLight,
                fontSize: '14px',
                mt: 1,
                mb: 4,
                color: 'background.paper',
                backgroundColor: '#f52b60',
                borderColor: 'background.paper',
                border: 1,
                borderRadius: 1,
                width: '120px',
                height: '40px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              })}
            >
              247 Points
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
                color: 'background.paper',
                borderRadius: '50%',
              })}
            />
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '16px',
                mt: 2,
                color: 'background.paper',
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
                color: 'background.paper',
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
                color: '#FEC954',
              })}
            >
              Rank 03
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightLight,
                fontSize: '14px',
                mt: 1,
                mb: 4,
                color: 'background.paper',
                borderColor: 'background.paper',
                border: 1,
                borderRadius: 1,
                width: '120px',
                height: '40px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              })}
            >
              209 Points
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrimaryDisplayCard;
