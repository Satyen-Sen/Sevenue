import * as React from 'react';
import { useTranslations } from 'next-intl';
import Grid from '@mui/material/Grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CustomTextField from '../../components/CustomTextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useGlobalData } from '../../store/GlobalContext';
import { useEffect } from 'react';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import { useSnackbar } from 'notistack';

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

const ProfileSection = ({ setActiveStep }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [user] = useGlobalData();
  const [userData, setUserData] = useUserOnBoardingData();
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
    age: '18 and Below',
    state: 'Odisha',
    hereAboutUs: 'Online news outlets',
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

  const validate = () => {
    if (data.firstName === '') {
      enqueueSnackbar('First Name is required', { variant: 'error' });
      return false;
    } else if (data.lastName.trim() === '') {
      enqueueSnackbar('Last Name is required', { variant: 'error' });
      return false;
    } else if (data.email.trim() === '') {
      enqueueSnackbar('Email is required', { variant: 'error' });
      return false;
    } else {
      return true;
    }
  };

  const handleNext = () => {
    if (validate()) {
      setUserData({
        ...userData,
        ...data,
      });
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  useEffect(() => {
    if (!user) return;
    let val = {
      ...user,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.userInfo.gender,
      jobTitle: user.userInfo.jobTitle,
      companyName: user.userInfo.company,
      about: user.userInfo.about,
      phone: user.userInfo.phoneNumber,
      age: user.userInfo.age,
      state: user.userInfo.state,
      hereAboutUs: user.userInfo.howDidYouHearAboutUs,
      ...userData,
    };
    setData((prevState) => ({
      ...prevState,
      ...val,
    }));
    setUserData({ ...val });
  }, [user]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={12} sm={12} textAlign={'center'} xs={12}>
          <Box mb={2}>
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
            onChange={() => {
              enqueueSnackbar('Email can not be modified', { variant: 'warning' });
            }}
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
        {/*<Grid item md={6} sm={6} xs={12}>*/}
        {/*  <CustomTextField*/}
        {/*    InputProps={{*/}
        {/*      startAdornment: <InputAdornment position="start">+91</InputAdornment>,*/}
        {/*    }}*/}
        {/*    fullWidth*/}
        {/*    id="phone"*/}
        {/*    label={translations('form.phone')}*/}
        {/*    onChange={(e) => {*/}
        {/*      if (e.target.value.split('').length <= 10) {*/}
        {/*        handleChange(e);*/}
        {/*      }*/}
        {/*    }}*/}
        {/*    placeholder={translations('form.enter-phone')}*/}
        {/*    type="number"*/}
        {/*    value={data.phone}*/}
        {/*    variant="filled"*/}
        {/*  />*/}
        {/*</Grid>*/}
        {/*<Grid item md={6} sm={6} xs={12}>*/}
        {/*  <CustomTextField*/}
        {/*    fullWidth*/}
        {/*    id="age"*/}
        {/*    label={translations('form.age')}*/}
        {/*    onChange={(e) => handleSelectChange(e, 'age')}*/}
        {/*    select*/}
        {/*    value={data.age}*/}
        {/*    variant="filled"*/}
        {/*  >*/}
        {/*    {age.map((option) => (*/}
        {/*      <MenuItem key={option.value} value={option.value}>*/}
        {/*        {option.label}*/}
        {/*      </MenuItem>*/}
        {/*    ))}*/}
        {/*  </CustomTextField>*/}
        {/*</Grid>*/}
        {/*<Grid item md={6} sm={6} xs={12}>*/}
        {/*  <CustomTextField*/}
        {/*    fullWidth*/}
        {/*    id="state"*/}
        {/*    label={translations('form.state')}*/}
        {/*    onChange={(e) => handleSelectChange(e, 'state')}*/}
        {/*    select*/}
        {/*    value={data.state}*/}
        {/*    variant="filled"*/}
        {/*  >*/}
        {/*    {state.map((option) => (*/}
        {/*      <MenuItem key={option.value} value={option.value}>*/}
        {/*        {option.label}*/}
        {/*      </MenuItem>*/}
        {/*    ))}*/}
        {/*  </CustomTextField>*/}
        {/*</Grid>*/}
        {/*<Grid item md={6} sm={6} xs={12}>*/}
        {/*  <CustomTextField*/}
        {/*    fullWidth*/}
        {/*    id="hereAboutUs"*/}
        {/*    label={translations('form.here-about-us')}*/}
        {/*    onChange={(e) => handleSelectChange(e, 'hereAboutUs')}*/}
        {/*    select*/}
        {/*    value={data.hereAboutUs}*/}
        {/*    variant="filled"*/}
        {/*  >*/}
        {/*    {hereAboutUs.map((option) => (*/}
        {/*      <MenuItem key={option.value} value={option.value}>*/}
        {/*        {option.label}*/}
        {/*      </MenuItem>*/}
        {/*    ))}*/}
        {/*  </CustomTextField>*/}
        {/*</Grid>*/}
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
