import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import getPageMessages from '../utils/getPageMessages';
import { useTranslations } from 'next-intl';
import ProfileSection from '../src/page-components/onBoarding/ProfileSection';
import SocialProfileSection from '../src/page-components/onBoarding/SocialProfileSection';
import MatchingSection from '../src/page-components/onBoarding/MatchingSection';
import InterestSection from '../src/page-components/onBoarding/InterestSection';

const OnBoarding = () => {
  const translations = useTranslations();
  const steps = [
    translations('label.profile'),
    translations('label.social'),
    translations('label.matching'),
    translations('label.interests'),
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Container maxWidth={'md'}>
      <Box px={{ md: 12, sm: 6, xs: 0 }} py={6}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  <Typography
                    sx={(theme) => ({
                      fontSize: '0.8rem',
                      fontWeight: theme.typography.fontWeightBold,
                    })}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Box mb={6}>
        {activeStep === 0 && <ProfileSection setActiveStep={setActiveStep} />}
        {activeStep === 1 && <SocialProfileSection activeStep={activeStep} setActiveStep={setActiveStep} />}
        {activeStep === 2 && <MatchingSection activeStep={activeStep} setActiveStep={setActiveStep} />}
        {activeStep === 3 && <InterestSection activeStep={activeStep} setActiveStep={setActiveStep} />}
      </Box>
    </Container>
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

export default OnBoarding;
