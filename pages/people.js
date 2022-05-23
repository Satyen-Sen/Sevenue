import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import getPageMessages from '../utils/getPageMessages';
import DashboardLayout from '../src/layouts/DashboardLayout';
import { useTranslations } from 'next-intl';
import PeopleCard from '../src/page-components/People/PeopleCard';
import { useState } from 'react';
import { UsersService } from '../src/apis/rest.app';
import InfiniteScroll from '../src/components/InfiniteScroll';
import Skeleton from '@mui/material/Skeleton';

const People = () => {
  const translations = useTranslations();
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [people, setPeople] = useState([]);

  const loadPeople = () => {
    UsersService.find({
      query: {
        $skip: people.length,
        $limit: 9,
        $sort: {
          createdAt: -1,
        },
      },
    })
      .then((response) => {
        const { data, total } = response;
        setTotal(total);
        const result = [...people, ...data];
        setHasMore(result.length < total);
        setPeople(result);
      })
      .catch(() => {
        setHasMore(false);
      });
  };
  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.2rem',
          marginBottom: theme.spacing(2),
        })}
      >
        {translations('title')}
      </Typography>
      <Divider />
      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.2rem',
          my: theme.spacing(2),
        })}
      >
        {translations('your-match')}
      </Typography>
      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.2rem',
          my: theme.spacing(2),
        })}
      >
        {translations('all-attendees', { count: total })}
      </Typography>
      <InfiniteScroll
        hasMore={hasMore}
        loadMore={loadPeople}
        loader={
          <Grid container key={'all-teacher'} spacing={2} sx={{ mt: 2 }}>
            {[...Array(9)].map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid item key={index} md={4} sm={6} xs={12}>
                <Skeleton animation={'wave'} height={110} sx={{ borderRadius: 1 }} variant={'rectangular'} />
              </Grid>
            ))}
          </Grid>
        }
        pageStart={0}
      >
        <Grid container spacing={2}>
          {people.map((person) => (
            <Grid item key={person?._id} md={4} sm={6} xs={12}>
              <PeopleCard person={person} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </React.Fragment>
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

People.Layout = DashboardLayout;

export default People;
