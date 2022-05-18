import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import CustomTextField from '../../components/CustomTextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Facebook from '../../assets/login/facebook.svg';
import Linkedin from '../../assets/login/linkedin.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import { useEffect } from 'react';

const SocialProfileSection = ({ activeStep, setActiveStep }) => {
  const translations = useTranslations('social');
  const [userData, setUserData] = useUserOnBoardingData();
  const [data, setData] = React.useState({
    facebook: '',
    website: '',
    linkedin: '',
    twitter: '',
    instagram: '',
  });

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleNext = () => {
    setUserData({
      ...userData,
      socialLinks: {
        ...data,
      },
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setUserData({
      ...userData,
      socialLinks: {
        facebook: '',
        website: '',
        linkedin: '',
        twitter: '',
        instagram: '',
      },
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  useEffect(() => {
    if (userData) {
      setData({ ...userData.socialLinks });
    }
  }, [userData]);

  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({
          ...theme.typography.h4,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.5rem',
          color: theme.palette.primary.main,
        })}
      >
        {translations('title', { event: '[EVENT NAME]' })}
      </Typography>
      <Typography
        sx={(theme) => ({
          ...theme.typography.subtitle1,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '0.8rem',
          marginBottom: theme.spacing(3),
        })}
      >
        {translations('description')}
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={12} sm={12} xs={12}>
          <CustomTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LanguageIcon sx={{ color: '#4c68d7', width: '22px' }} />
                </InputAdornment>
              ),
            }}
            fullWidth
            id="website"
            label={translations('form.website')}
            onChange={handleChange}
            placeholder={translations('form.website-placeholder')}
            type="text"
            value={data.website}
            variant="filled"
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <CustomTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={'Facebook'} src={Facebook} width={'18px'} />
                </InputAdornment>
              ),
            }}
            fullWidth
            id="facebook"
            label={translations('form.facebook')}
            onChange={handleChange}
            placeholder={translations('form.facebook-placeholder')}
            type="text"
            value={data.facebook}
            variant="filled"
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <CustomTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={'linkedin'} src={Linkedin} width={'18px'} />
                </InputAdornment>
              ),
            }}
            fullWidth
            id="linkedin"
            label={translations('form.linkedin')}
            onChange={handleChange}
            placeholder={translations('form.linkedin-placeholder')}
            type="text"
            value={data.linkedin}
            variant="filled"
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <CustomTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon sx={{ color: '#1da1f2', width: '22px' }} />
                </InputAdornment>
              ),
            }}
            fullWidth
            id="twitter"
            label={translations('form.twitter')}
            onChange={handleChange}
            placeholder={translations('form.twitter-placeholder')}
            type="text"
            value={data.twitter}
            variant="filled"
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <CustomTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon sx={{ color: '#a82daf', width: '22px' }} />
                </InputAdornment>
              ),
            }}
            fullWidth
            id="instagram"
            label={translations('form.instagram')}
            onChange={handleChange}
            placeholder={translations('form.instagram-placeholder')}
            type="text"
            value={data.instagram}
            variant="filled"
          />
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
            {translations('form.previous')}
          </Button>
        )}
        <Button
          fullWidth
          onClick={handleNext}
          sx={(theme) => ({
            padding: theme.spacing(1, 4),
            maxWidth: theme.spacing(16),
            textTransform: 'none',
          })}
          variant={'contained'}
        >
          {translations('form.next')}
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {activeStep !== 0 && (
          <Button
            color="primary"
            onClick={handleSkip}
            sx={(theme) => ({
              padding: theme.spacing(1, 4),
              maxWidth: theme.spacing(16),
              textTransform: 'none',
            })}
          >
            {translations('form.skip')}
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

SocialProfileSection.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};

export default SocialProfileSection;
