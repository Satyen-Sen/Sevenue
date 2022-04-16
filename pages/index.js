import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import getPageMessages from '../utils/getPageMessages';
import Grid from '@mui/material/Grid';
import EventDetailCard from '../src/page-components/index/EventDetailCard';
import EventBasicDetail from '../src/page-components/index/EventBasicDetail';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTranslations } from 'next-intl';
import { styled } from '@mui/material/styles';
import ScheduleDetails from '../src/page-components/index/ScheduleDetails';
import AllSpeakerDetails from '../src/page-components/index/AllSpeakerDetails';

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontSize: theme.typography.pxToRem(15),
  fontWeight: theme.typography.fontWeightBold,
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
        <Box mb={2} mt={2}>
          {children}
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

const Index = () => {
  const translations = useTranslations();
  // const [height, setHeight] = React.useState('230px');
  // const intl = useIntl();
  // const dateTime = intl.formatDateTime(new Date(), {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   second: 'numeric',
  //   timeZoneName: 'short',
  // });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box mt={3.5} />
      <Grid container spacing={4}>
        <Grid item md={7} sm={12} xs={12}>
          <EventBasicDetail />
          <React.Fragment>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs aria-label="basic tabs example" onChange={handleChange} value={value}>
                <CustomTab label={translations('tab.schedule')} {...a11yProps(0)} />
                <CustomTab label={translations('tab.speakers')} {...a11yProps(1)} />
                <CustomTab label={translations('tab.sponsors')} {...a11yProps(2)} />
                <CustomTab label={translations('tab.exhibitors')} {...a11yProps(2)} />
                <CustomTab label={translations('tab.organizer')} {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel index={0} value={value}>
              <ScheduleDetails />
            </TabPanel>
            <TabPanel index={1} value={value}>
              <AllSpeakerDetails />
            </TabPanel>
            <TabPanel index={2} value={value}>
              Item Three
            </TabPanel>
          </React.Fragment>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <EventDetailCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages('index', locale),
    },
  };
};

export default Index;
