import * as React from 'react';
import { useTranslations } from 'next-intl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CustomTextField from '../../components/CustomTextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const gender = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'others',
    label: 'Others',
  },
];

const age = [
  {
    value: '1',
    label: 'below 18',
  },
  {
    value: '2',
    label: 'Above 18 and Below 25',
  },
  {
    value: '3',
    label: '25 or Above',
  },
];

const state = [
  { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
  { value: 'telangana', label: 'Telangana' },
  { value: 'odisha', label: 'Odisha' },
];
const hereAboutUs = [
  { value: 'social', label: 'Here from social media' },
  { value: 'community', label: 'Online Community' },
  { value: 'outlets', label: 'Online news outlets' },
];

const ProfileSection = ({ setActiveStep }) => {
  const translations = useTranslations('profile');
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: 'male',
    jobTitle: '',
    companyName: '',
    about: '',
    phone: '',
    age: '3',
    state: 'odisha',
    hereAboutUs: 'outlets',
  });

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSelectChange = (e, key) => {
    setData((prevState) => ({
      ...prevState,
      [key]: e.target.value,
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

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
        })}
      >
        {translations('description')}
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={12} sm={12} textAlign={'center'} xs={12}>
          <Box mb={2} mt={4}>
            <Badge
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <IconButton
                  color={'primary'}
                  size={'small'}
                  sx={(theme) => ({
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    transition: theme.transitions.create(['color', 'background-color']),
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  })}
                  variant={'contained'}
                >
                  <EditOutlinedIcon fontSize={'small'} />
                </IconButton>
              }
              overlap="circular"
            >
              <Avatar alt="Travis Howard" sx={{ width: 136, height: 136 }} />
            </Badge>
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="firstName"
            label={translations('form.first-name')}
            onChange={handleChange}
            placeholder={translations('form.enter-first-name')}
            type="text"
            value={data.firstName}
            variant="filled"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="lastName"
            label={translations('form.last-name')}
            onChange={handleChange}
            placeholder={translations('form.enter-last-name')}
            type="text"
            value={data.lastName}
            variant="filled"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="email"
            label={translations('form.email')}
            onChange={handleChange}
            placeholder={translations('form.enter-email')}
            type="email"
            value={data.email}
            variant="filled"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="gender"
            label={translations('form.gender')}
            onChange={(e) => handleSelectChange(e, 'gender')}
            select
            value={data.gender}
            variant="filled"
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="jobTitle"
            label={translations('form.job-title')}
            onChange={handleChange}
            placeholder={translations('form.enter-job-title')}
            type="text"
            value={data.jobTitle}
            variant="filled"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="companyName"
            label={translations('form.company-name')}
            onChange={handleChange}
            placeholder={translations('form.enter-company-name')}
            type="text"
            value={data.companyName}
            variant="filled"
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <CustomTextField
            fullWidth
            id="about"
            label={translations('form.about')}
            multiline={true}
            onChange={handleChange}
            placeholder={translations('form.enter-about')}
            rows={4}
            type="text"
            value={data.about}
            variant="filled"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
            }}
            fullWidth
            id="phone"
            label={translations('form.phone')}
            onChange={(e) => {
              if (e.target.value.split('').length <= 10) {
                handleChange(e);
              }
            }}
            placeholder={translations('form.enter-phone')}
            type="number"
            value={data.phone}
            variant="filled"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="age"
            label={translations('form.age')}
            onChange={(e) => handleSelectChange(e, 'age')}
            select
            value={data.age}
            variant="filled"
          >
            {age.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="state"
            label={translations('form.state')}
            onChange={(e) => handleSelectChange(e, 'state')}
            select
            value={data.state}
            variant="filled"
          >
            {state.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField
            fullWidth
            id="hereAboutUs"
            label={translations('form.here-about-us')}
            onChange={(e) => handleSelectChange(e, 'hereAboutUs')}
            select
            value={data.hereAboutUs}
            variant="filled"
          >
            {hereAboutUs.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
      </Grid>
      <Box sx={{ py: 4 }}>
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
      </Box>
    </React.Fragment>
  );
};

ProfileSection.propTypes = {
  setActiveStep: PropTypes.func,
};
export default ProfileSection;
