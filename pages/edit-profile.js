import * as React from 'react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import { useTranslations } from 'next-intl';
import getPageMessages from '../utils/getPageMessages';
import { withUserOnBoardingData } from '../src/store/UserOnBaordingContext';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ProfileSection from '../src/page-components/EditProfile/ProfileSection';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MatchingSection from '../src/page-components/EditProfile/MatchingSection';
import InterestSection from '../src/page-components/EditProfile/InterestSection';
import NetworkingSection from '../src/page-components/EditProfile/NetworkingSection';

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '1rem',
  textTransform: 'none',
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const EditProfile = () => {
  const translations = useTranslations();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveStep(newValue);
  };

  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1rem',
          marginBottom: theme.spacing(2),
        })}
      >
        {translations('edit-profile.title')}
      </Typography>
      <Divider />
      <Container maxWidth={'md'}>
        <Box pb={4} pt={6}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs aria-label="basic tabs example" onChange={handleChange} value={activeStep}>
              <CustomTab label={translations('edit-profile.label.profile')} {...a11yProps(0)} />
              <CustomTab label={translations('edit-profile.label.interests')} {...a11yProps(1)} />
              <CustomTab label={translations('edit-profile.label.looking-for')} {...a11yProps(2)} />
              <CustomTab label={translations('edit-profile.label.networking')} {...a11yProps(3)} />
            </Tabs>
          </Box>
        </Box>
        <Box mb={6}>
          {activeStep === 0 && <ProfileSection setActiveStep={setActiveStep} />}
          {activeStep === 1 && <InterestSection activeStep={activeStep} setActiveStep={setActiveStep} />}
          {activeStep === 2 && <MatchingSection activeStep={activeStep} setActiveStep={setActiveStep} />}
          {activeStep === 3 && <NetworkingSection activeStep={activeStep} setActiveStep={setActiveStep} />}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages('onBoarding', locale),
    },
  };
};

EditProfile.Layout = DashboardLayout;

export default withUserOnBoardingData(EditProfile);
