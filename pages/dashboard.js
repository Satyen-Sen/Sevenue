import * as React from 'react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Typography from '@mui/material/Typography';
import getPageMessages from '../utils/getPageMessages';

const Dashboard = () => {
  return (
    <div>
      <Typography>Dashboard</Typography>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages('people', locale),
    },
  };
};

Dashboard.Layout = DashboardLayout;

export default Dashboard;
