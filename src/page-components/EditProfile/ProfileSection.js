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
import { useGlobalData } from '../../store/GlobalContext';
import { useEffect } from 'react';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import { useSnackbar } from 'notistack';
import CropperDialog from '../../components/Crop/CropperDialog';
import InputAdornment from '@mui/material/InputAdornment';
import { uploadFile, UsersService } from '../../apis/rest.app';
import LoadingButton from '@mui/lab/LoadingButton';

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
    value: '18 and Below',
    label: '18 and Below',
  },
  {
    value: 'Above 18 and Below 25',
    label: 'Above 18 and Below 25',
  },
  {
    value: '25 or Above',
    label: '25 or Above',
  },
];

const state = [
  { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
  { value: 'Assam', label: 'Assam' },
  { value: 'Bihar', label: 'Bihar' },
  { value: 'Chhattisgarh', label: 'Chhattisgarh' },
  { value: 'Goa', label: 'Goa' },
  { value: 'Gujarat', label: 'Gujarat' },
  { value: 'Haryana', label: 'Haryana' },
  { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
  { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
  { value: 'Jharkhand', label: 'Jharkhand' },
  { value: 'Karnataka', label: 'Karnataka' },
  { value: 'Kerala', label: 'Kerala' },
  { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Manipur', label: 'Manipur' },
  { value: 'Meghalaya', label: 'Meghalaya' },
  { value: 'Mizoram', label: 'Mizoram' },
  { value: 'Nagaland', label: 'Nagaland' },
  { value: 'Odisha', label: 'Odisha' },
  { value: 'Punjab', label: 'Punjab' },
  { value: 'Rajasthan', label: 'Rajasthan' },
  { value: 'Sikkim', label: 'Sikkim' },
  { value: 'Tamil Nadu', label: 'Tamil Nadu' },
  { value: 'Telangana', label: 'Telangana' },
  { value: 'Tripura', label: 'Tripura' },
  { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
  { value: 'Uttarakhand', label: 'Uttarakhand' },
  { value: 'West Bengal', label: 'West Bengal' },
];
const hereAboutUs = [
  { value: 'Here from social media', label: 'Here from social media' },
  { value: 'Online Community', label: 'Online Community' },
  { value: 'Online news outlets', label: 'Online news outlets' },
];

const ProfileSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useGlobalData();
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
    age: '',
    state: '',
    hereAboutUs: '',
  });

  const [loading, setLoading] = React.useState(false);
  const [isAdded, setIsAdded] = React.useState(false);

  const [image, setImage] = React.useState(user ? user.avatar : null);
  const [src, setSrc] = React.useState(user ? user.avatar : null);
  const [show, setShow] = React.useState(false);

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
    if (!image) {
      enqueueSnackbar('Please upload your profile picture', { variant: 'error' });
      return false;
    } else if (data.firstName === '') {
      enqueueSnackbar('First Name is required', { variant: 'error' });
      return false;
    } else if (data.lastName.trim() === '') {
      enqueueSnackbar('Last Name is required', { variant: 'error' });
      return false;
    } else if (data.email.trim() === '') {
      enqueueSnackbar('Email is required', { variant: 'error' });
      return false;
    } else if (data.phone.trim() === '') {
      enqueueSnackbar('Phone is required', { variant: 'error' });
      return false;
    } else if (data.phone.length !== 10) {
      enqueueSnackbar('Phone number must be of 10 digits', { variant: 'error' });
      return false;
    } else {
      return true;
    }
  };

  const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleSave = async () => {
    if (validate()) {
      setLoading(true);
      let _image = userData.image;
      if (userData.avatar !== userData.image) {
        await uploadFile(dataURLtoFile(_image, `upload-${new Date().getTime()}.png`))
          .then((response) => {
            if (response) {
              _image = response.link;
            } else {
              _image = null;
            }
          })
          .catch((err) => {
            enqueueSnackbar(err.message, {
              variant: 'error',
            });
          });
      }
      if (!_image) {
        enqueueSnackbar('Image upload failed', { variant: 'error' });
        setLoading(false);
        return;
      }
      await UsersService.patch(user._id, {
        avatar: _image,
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
      })
        .then((res) => {
          setUser({
            ...res,
          });
          setLoading(false);
          enqueueSnackbar('Updated Successfully', { variant: 'success' });
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (!isAdded) return;
    setUserData((prevState) => ({
      ...prevState,
      ...data,
      image: image,
    }));
  }, [data, image]);

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
      avatar: user.avatar || '',
      image: user.avatar || '',
      ...userData,
    };
    setData((prevState) => ({
      ...prevState,
      ...val,
    }));
    setUserData({ ...val });
    setImage(userData?.image ? userData?.image : user.avatar);
    setSrc(userData?.image ? userData?.image : user.avatar);
    setIsAdded(true);
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
                  onClick={() => {
                    setShow(true);
                  }}
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
              <Avatar alt="Travis Howard" src={image} sx={{ width: 136, height: 136 }} />
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
        <LoadingButton
          fullWidth
          loading={loading}
          onClick={handleSave}
          sx={(theme) => ({
            padding: theme.spacing(1, 4),
            maxWidth: theme.spacing(16),
            textTransform: 'none',
          })}
          variant={'contained'}
        >
          {translations('form.save')}
        </LoadingButton>
      </Box>
      <CropperDialog
        aspectRatio={1}
        cancel={() => {
          if (src) setSrc(null);
          else setShow(false);
        }}
        cancelLabel={src ? 'Clear Image' : 'Cancel'}
        dismiss={() => {
          setShow(false);
        }}
        okLabel={'Save'}
        onCropped={(data) => {
          setShow(false);
          setSrc(data);
          setImage(data);
        }}
        onSelected={(s) => {
          setSrc(s);
        }}
        show={show}
        src={src}
      />
    </React.Fragment>
  );
};

export default ProfileSection;
