import * as React from 'react';
import Logo from '../../assets/logo/vec_logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import { useGlobalData } from '../../store/GlobalContext';
import { useIntl, useTranslations } from 'next-intl';
import Profile from './Profile';
import Feed from '../../assets/dashboard/header/feed.svg';
import LiveNow from '../../assets/dashboard/header/live-now.svg';
import Schedule from '../../assets/dashboard/header/schedule.svg';
import Bookmark from '../../assets/dashboard/header/bookmark.svg';
import BriefCase from '../../assets/dashboard/header/brief-case.svg';
import Leaderboard from '../../assets/dashboard/header/leaderboard.svg';
import People from '../../assets/dashboard/header/people.svg';
import Message from '../../assets/dashboard/header/message.svg';
import Notification from '../../assets/dashboard/header/notification.svg';

const DashboardHeader = () => {
  const translations = useTranslations('layout.dashboard.header');
  const Router = useRouter();
  const [, , event] = useGlobalData();
  const intl = useIntl();
  const startDate = intl.formatDateTime(new Date(event?.startDate || new Date()), {
    month: 'long',
    day: '2-digit',
  });
  const endDate = intl.formatDateTime(new Date(event?.endDate || new Date()), {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  const list = [
    {
      name: translations('feed'),
      icon: Feed,
      activeIcon: Feed,
      route: '/dashboard/feed',
    },
    {
      name: translations('live-now'),
      icon: LiveNow,
      activeIcon: LiveNow,
      route: '/dashboard/live-now',
    },
    {
      name: translations('my-schedule'),
      icon: Schedule,
      activeIcon: Schedule,
      route: '/dashboard/schedule',
    },
    {
      name: translations('my-bookmarks'),
      icon: Bookmark,
      activeIcon: Bookmark,
      route: '/dashboard/bookmark',
    },
    {
      name: translations('my-briefcases'),
      icon: BriefCase,
      activeIcon: BriefCase,
      route: '/dashboard/brief-case',
    },
    {
      name: translations('leaderboard'),
      icon: Leaderboard,
      activeIcon: Leaderboard,
      route: '/dashboard/leaderboard',
    },
    {
      name: translations('people'),
      icon: People,
      activeIcon: People,
      route: '/dashboard/people',
    },
    {
      name: translations('messages'),
      icon: Message,
      activeIcon: Message,
      route: '/dashboard/message',
    },
    {
      name: translations('notifications'),
      icon: Notification,
      activeIcon: Notification,
      route: '/dashboard/notification',
    },
  ];

  return (
    <React.Fragment>
      <AppBar
        color={'inherit'}
        position="fixed"
        sx={(theme) => ({
          zIndex: theme.zIndex.drawer + 1,
          boxShadow: '0 -0.5px 4px 0 rgba(0, 0, 0, 0.16)',
          overflowX: 'hidden',
          maxHeight: '100px',
        })}
      >
        <Toolbar disableGutters>
          <Box display={'flex'} justifyContent={'space-between'} px={2} width={'100%'}>
            <Box display={'flex'}>
              <Box
                mr={2}
                my={1.75}
                py={1.5}
                sx={{
                  paddingTop: 2,
                  backgroundColor: '#f8e9ee',
                  maxWidth: '220px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="logo" height={'100%'} src={Logo} width={'100%'} />
              </Box>
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                px={2}
                sx={(theme) => ({
                  borderLeft: '1px solid',
                  borderColor: theme.palette.divider,
                  width: '350px',
                })}
              >
                <Typography
                  sx={(theme) => ({
                    ...theme.typography.h4,
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: '1rem',
                  })}
                >
                  {event && event.name}
                </Typography>
                <Typography
                  sx={(theme) => ({
                    ...theme.typography.h5,
                    fontWeight: theme.typography.fontWeightBold,
                    color: theme.palette.primary.main,
                    fontSize: '0.8rem',
                  })}
                >
                  {translations('description', {
                    start: startDate,
                    end: endDate,
                  })}
                </Typography>
              </Box>
            </Box>
            <Box>
              {list.map((each) => {
                const [isActive, setIsActive] = React.useState(false);
                return (
                  <Button
                    color={'inherit'}
                    key={each.name}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                    sx={() => ({
                      height: '100%',
                      textTransform: 'none',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    })}
                  >
                    <Box alignItems={'center'} display={'flex'} flexDirection={'column'} pt={0.5}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={each.name}
                        height={'19px'}
                        src={isActive ? each.activeIcon : each.icon}
                        width={'19px'}
                      />
                      <Typography
                        sx={(theme) => ({
                          ...theme.typography.h6,
                          fontSize: '0.8rem',
                          color:
                            isActive || Router.pathname.startsWith(each.route)
                              ? theme.palette.primary.main
                              : theme.palette.text.primary,
                          marginTop: theme.spacing(0.5),
                        })}
                      >
                        {each.name}
                      </Typography>
                    </Box>
                  </Button>
                );
              })}
              <Profile />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default DashboardHeader;
