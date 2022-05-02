import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import { useGlobalData } from '../../store/GlobalContext';
import { UsersService } from '../../apis/rest.app';
import { useRouter } from 'next/router';

const InterestSection = ({ activeStep, setActiveStep }) => {
  const Router = useRouter();
  const [user, setUser] = useGlobalData();
  const [userData] = useUserOnBoardingData();
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
    { title: 'Sports', isSelected: false },
    { title: 'Statups', isSelected: false },
    { title: 'Professional Services', isSelected: false },
    { title: 'Social', isSelected: false },
    { title: 'Other', isSelected: false },
  ]);

  const handleNext = () => {
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
      socialLinks: {
        ...userData.socialLinks,
      },
      matching: {
        ...userData.matching,
      },
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
    }).then((res) => {
      setUser({
        ...user,
        ...res,
      });
      Router.push('/');
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
          marginBottom: theme.spacing(3),
        })}
      >
        {translations('description')}
      </Typography>
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
            padding: theme.spacing(1, 1),
            maxWidth: theme.spacing(16),
            textTransform: 'none',
          })}
          variant={'contained'}
        >
          {translations('next')}
        </Button>
      </Box>
    </React.Fragment>
  );
};

InterestSection.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};

export default InterestSection;
