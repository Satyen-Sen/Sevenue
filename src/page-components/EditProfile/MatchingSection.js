import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import { useEffect } from 'react';

const MatchingSection = ({ activeStep, setActiveStep }) => {
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

  const handleNext = () => {
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
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
          {translations('next')}
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
      </Box>
    </React.Fragment>
  );
};

MatchingSection.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};

export default MatchingSection;
