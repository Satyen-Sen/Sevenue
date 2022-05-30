import * as React from 'react';
import getPageMessages from '../utils/getPageMessages';
import DashboardLayout from '../src/layouts/DashboardLayout';
import { useTranslations } from 'next-intl';

const Leaderboard = () => {
  const translations = useTranslations();
  return (
    <div>
      <p>{translations('title')}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages('leaderboard', locale),
    },
  };
};

Leaderboard.Layout = DashboardLayout;

export default Leaderboard;
