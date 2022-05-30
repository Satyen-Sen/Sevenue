import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useGlobalData } from '../../store/GlobalContext';
import LoadingButton from '@mui/lab/LoadingButton';
import { UsersService } from '../../apis/rest.app';

const MatchingSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useGlobalData();
  const [userData, setUserData] = useUserOnBoardingData();
  const translations = useTranslations('matching');
  const [offeringData, setOfferingData] = React.useState([
    { title: 'Academics', isSelected: false },
    { title: 'Sports', isSelected: false },
    { title: 'Statups', isSelected: false },
    { title: 'Professional Services', isSelected: false },
    { title: 'Social', isSelected: false },
    { title: 'Other', isSelected: false },
  ]);
  const [lookingForData, setLookingForData] = React.useState([
    { title: 'Academics', isSelected: false },
    { title: 'Sports', isSelected: false },
    { title: 'Statups', isSelected: false },
    { title: 'Professional Services', isSelected: false },
    { title: 'Social', isSelected: false },
    { title: 'Other', isSelected: false },
  ]);

  const [loading, setLoading] = React.useState(false);
  const [isAdded, setIsAdded] = React.useState(false);

  const handleSave = () => {
    setLoading(true);
    UsersService.patch(user._id, {
      matching: userData.matching,
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
  };

  useEffect(() => {
    if (!isAdded) return;
    let lookingFor = [];
    lookingForData.forEach((item) => {
      if (item.isSelected) {
        lookingFor.push(item.title);
      }
    });
    let offering = [];
    offeringData.forEach((item) => {
      if (item.isSelected) {
        offering.push(item.title);
      }
    });
    setUserData({
      ...userData,
      matching: {
        lookingFor,
        offering,
      },
    });
  }, [lookingForData, offeringData]);

  useEffect(() => {
    if (isAdded) return;
    if (!userData) return;
    let _lookingForData = lookingForData;
    _lookingForData.forEach((data) => {
      if (userData.matching.lookingFor.findIndex((item) => item === data.title) !== -1) {
        data.isSelected = true;
      }
    });
    setLookingForData([..._lookingForData]);
    let _offeringData = offeringData;
    _offeringData.forEach((data) => {
      if (userData.matching.offering.findIndex((item) => item === data.title) !== -1) {
        data.isSelected = true;
      }
    });
    setOfferingData([..._offeringData]);
    setIsAdded(true);
  }, [userData]);

  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({
          ...theme.typography.subtitle1,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.2rem',
          marginBottom: theme.spacing(1),
        })}
      >
        {translations('sub-title-1')}
      </Typography>
      <Box>
        {lookingForData.map((item, index) => (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={`${item.title}-${index}`}
            label={item.title}
            onClick={() => {
              let _data = lookingForData;
              _data[index].isSelected = !_data[index].isSelected;
              setLookingForData([..._data]);
            }}
            sx={(theme) => ({
              margin: theme.spacing(0, 1, 1, 0),
              cursor: 'pointer',
              backgroundColor: item.isSelected ? '#e1eaf9' : 'rgba(0, 0, 0, 0.08)',
              '&:hover': {
                backgroundColor: '#e1eaf9',
              },
            })}
          />
        ))}
      </Box>
      <Typography
        sx={(theme) => ({
          ...theme.typography.subtitle1,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.2rem',
          margin: theme.spacing(2, 0, 1, 0),
        })}
      >
        {translations('sub-title-2')}
      </Typography>
      <Box>
        {offeringData.map((item, index) => (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={`${item.title}-${index}`}
            label={item.title}
            onClick={() => {
              let _data = offeringData;
              _data[index].isSelected = !_data[index].isSelected;
              setOfferingData([..._data]);
            }}
            sx={(theme) => ({
              margin: theme.spacing(0, 1, 1, 0),
              cursor: 'pointer',
              backgroundColor: item.isSelected ? '#e1eaf9' : 'rgba(0, 0, 0, 0.08)',
              '&:hover': {
                backgroundColor: '#e1eaf9',
              },
            })}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', py: 4 }}>
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
          {translations('save')}
        </LoadingButton>
        <Box sx={{ flex: '1 1 auto' }} />
      </Box>
    </React.Fragment>
  );
};

export default MatchingSection;
