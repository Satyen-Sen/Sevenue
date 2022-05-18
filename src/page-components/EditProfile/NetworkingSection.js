import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import Grid from '@mui/material/Grid';

import ButtonGroup from '@mui/material/ButtonGroup';
import { useGlobalData } from '../../store/GlobalContext';
import { UsersService } from '../../apis/rest.app';
import { useRouter } from 'next/router';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSnackbar } from 'notistack';

const NetworkingSection = ({ activeStep, setActiveStep }) => {
  const Router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useGlobalData();
  const [userData] = useUserOnBoardingData();
  const translations = useTranslations('networking');

  const [isActive, setIsActive] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleNext = () => {
    setLoading(true);
    UsersService.patch(user._id, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      userInfo: {
        gender: userData.gender,
        jobTitle: userData.jobTitle,
        company: userData.companyName,
        about: userData.about,
        phoneNumber: userData.phone,
        age: userData.age,
        state: userData.state,
        howDidYouHearAboutUs: userData.hereAboutUs,
      },
      matching: userData.matching,
      interests: userData.interests,
    })
      .then((res) => {
        setUser({
          ...res,
        });
        Router.push('/dashboard');
        setLoading(false);
        enqueueSnackbar('Updated Successfully', { variant: 'success' });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // useEffect(() => {
  //   if (!userData) return;
  // }, [userData]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={3} sm={6} xs={6}>
          <Typography
            sx={(theme) => ({
              ...theme.typography.body2,
              fontSize: '1rem',
            })}
          >
            {translations('meeting')}
          </Typography>
        </Grid>
        <Grid item md={9} sm={6} xs={6}>
          <ButtonGroup disableElevation variant="contained">
            <Button
              color={isActive ? 'primary' : 'inherit'}
              onClick={() => setIsActive(true)}
              sx={{ borderRight: 'transparent' }}
              variant={isActive ? 'contained' : 'outlined'}
            >
              {translations('on')}
            </Button>
            <Button
              color={!isActive ? 'primary' : 'inherit'}
              onClick={() => setIsActive(false)}
              sx={{ borderLeft: 'transparent' }}
              variant={!isActive ? 'contained' : 'outlined'}
            >
              {translations('off')}
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'row', py: 4 }}>
        {activeStep !== 0 && (
          <Button
            color="inherit"
            disabled={activeStep === 0}
            fullWidth
            onClick={handleBack}
            sx={(theme) => ({
              padding: theme.spacing(1, 4),
              textTransform: 'none',
              maxWidth: theme.spacing(16),
              mr: 1,
            })}
            variant={'outlined'}
          >
            {translations('previous')}
          </Button>
        )}
        <LoadingButton
          fullWidth
          loading={loading}
          onClick={handleNext}
          sx={(theme) => ({
            padding: theme.spacing(1, 4),
            maxWidth: theme.spacing(16),
            textTransform: 'none',
          })}
          variant={'contained'}
        >
          {translations('save')}
        </LoadingButton>
        <Box sx={{ flex: '1 1 auto' }} />
      </Box>
    </React.Fragment>
  );
};

NetworkingSection.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};

export default NetworkingSection;
