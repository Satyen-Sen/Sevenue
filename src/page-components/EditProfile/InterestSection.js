import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import { useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { UsersService } from '../../apis/rest.app';
import { useSnackbar } from 'notistack';
import { useGlobalData } from '../../store/GlobalContext';

const InterestSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useGlobalData();
  const [userData, setUserData] = useUserOnBoardingData();
  const translations = useTranslations('interest');
  const [fintechData, setFintechData] = React.useState([
    { title: 'Academics', isSelected: false },
    { title: 'Sports', isSelected: false },
    { title: 'Statups', isSelected: false },
    { title: 'Professional Services', isSelected: false },
    { title: 'Social', isSelected: false },
    { title: 'Other', isSelected: false },
  ]);

  const [solutionsData, setSolutionsData] = React.useState([
    { title: 'Academics', isSelected: false },
    { title: 'AI/Machine Learning', isSelected: false },
    { title: 'Statups', isSelected: false },
    { title: 'Professional Services', isSelected: false },
    { title: 'Block chain', isSelected: false },
    { title: 'Other', isSelected: false },
  ]);

  const [loading, setLoading] = React.useState(false);
  const [isAdded, setIsAdded] = React.useState(false);

  const handleSave = () => {
    setLoading(true);
    UsersService.patch(user._id, {
      interests: userData.interests,
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
    let fintech = [];
    fintechData.forEach((item) => {
      if (item.isSelected) {
        fintech.push(item.title);
      }
    });
    let solutions = [];
    solutionsData.forEach((item) => {
      if (item.isSelected) {
        solutions.push(item.title);
      }
    });
    setUserData({
      ...userData,
      interests: [
        {
          type: 'Fintech',
          values: fintech,
        },
        {
          type: 'Solutions',
          values: solutions,
        },
      ],
    });
  }, [solutionsData, fintechData]);

  useEffect(() => {
    if (isAdded) return;
    if (userData) {
      let _fintechData = fintechData;
      _fintechData.forEach((data) => {
        if (
          userData.interests.find((e) => e.type === 'Fintech').values.findIndex((item) => item === data.title) !== -1
        ) {
          data.isSelected = true;
        }
      });
      setFintechData([..._fintechData]);
      let _solutionsData = solutionsData;
      _solutionsData.forEach((data) => {
        if (
          userData.interests.find((e) => e.type === 'Solutions').values.findIndex((item) => item === data.title) !== -1
        ) {
          data.isSelected = true;
        }
      });
      setSolutionsData([..._solutionsData]);
    }
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
        {fintechData.map((item, index) => (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={`${item.title}-${index}`}
            label={item.title}
            onClick={() => {
              let _data = fintechData;
              _data[index].isSelected = !_data[index].isSelected;
              setFintechData([..._data]);
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
        {solutionsData.map((item, index) => (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={`${item.title}-${index}`}
            label={item.title}
            onClick={() => {
              let _data = solutionsData;
              _data[index].isSelected = !_data[index].isSelected;
              setSolutionsData([..._data]);
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
      <Box sx={{ py: 4 }}>
        <LoadingButton
          fullWidth
          loading={loading}
          onClick={handleSave}
          sx={(theme) => ({
            padding: theme.spacing(1, 1),
            maxWidth: theme.spacing(16),
            textTransform: 'none',
          })}
          variant={'contained'}
        >
          {translations('save')}
        </LoadingButton>
      </Box>
    </React.Fragment>
  );
};

export default InterestSection;
