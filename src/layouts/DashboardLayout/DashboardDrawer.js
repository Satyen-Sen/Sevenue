import * as React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import Home from '../../assets/dashboard/home.svg';
import ActiveHome from '../../assets/dashboard/active-home.svg';
import Stages from '../../assets/dashboard/stages.svg';
import ActiveStages from '../../assets/dashboard/active-stages.svg';
import Exhibitors from '../../assets/dashboard/exhibitor.svg';
import ActiveExhibitors from '../../assets/dashboard/active-exhibitor.svg';
import Speakers from '../../assets/dashboard/speakers.svg';
import ActiveSpeakers from '../../assets/dashboard/active-speakers.svg';
import People from '../../assets/dashboard/people.svg';
import ActivePeople from '../../assets/dashboard/active-people.svg';
import Lounge from '../../assets/dashboard/lounge.svg';
import ActiveLounge from '../../assets/dashboard/active-lounge.svg';
import Room from '../../assets/dashboard/rooms.svg';
import ActiveRoom from '../../assets/dashboard/active-rooms.svg';
import Contests from '../../assets/dashboard/contests.svg';
import ActiveContests from '../../assets/dashboard/active-contests.svg';
import Leaderboard from '../../assets/dashboard/leaderboard.svg';
import ActiveLeaderboard from '../../assets/dashboard/active-leaderboard.svg';
import PhotoBooth from '../../assets/dashboard/photo-booth.svg';
import ActivePhotoBooth from '../../assets/dashboard/active-photo-booth.svg';
import { useTranslations } from 'next-intl';
import Link from '../../components/Link';

const drawerOpenWidth = 245;
const drawerCloseWidth = 65;

const DashboardDrawer = () => {
  const translations = useTranslations('layout.dashboard.drawer');
  const Router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const menu = [
    {
      label: translations('enter-lobby'),
      icon: Home,
      activeIcon: ActiveHome,
      href: '/dashboard',
    },
    {
      label: translations('stage-agenda'),
      icon: Stages,
      activeIcon: ActiveStages,
      href: '/stages',
    },
    {
      label: translations('exhibitors'),
      icon: Exhibitors,
      activeIcon: ActiveExhibitors,
      href: '/exhibitors',
    },
    {
      label: translations('speakers'),
      icon: Speakers,
      activeIcon: ActiveSpeakers,
      href: '/speakers',
    },
    {
      label: translations('people'),
      icon: People,
      activeIcon: ActivePeople,
      href: '/people',
    },
    {
      label: translations('lounge'),
      icon: Lounge,
      activeIcon: ActiveLounge,
      href: '/lounge',
    },
    {
      label: translations('rooms'),
      icon: Room,
      activeIcon: ActiveRoom,
      href: '/rooms',
    },
    {
      label: translations('contests'),
      icon: Contests,
      activeIcon: ActiveContests,
      href: '/contests',
    },
    {
      label: translations('leaderboard'),
      icon: Leaderboard,
      activeIcon: ActiveLeaderboard,
      href: '/leaderboard',
    },
    {
      label: translations('photo-booth'),
      icon: PhotoBooth,
      activeIcon: ActivePhotoBooth,
      href: '/photo-booth',
    },
  ];

  return (
    <MuiDrawer
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
      open={open}
      sx={(theme) => ({
        width: drawerCloseWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
          width: open ? drawerOpenWidth : drawerCloseWidth,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
        },
      })}
      variant="permanent"
    >
      <Box
        sx={(theme) => ({
          height: theme.spacing(11),
        })}
      />
      <List>
        {menu.map((each) => (
          <ListItem disablePadding key={each.label} sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              href={each.href}
              sx={(theme) => ({
                minHeight: 44,
                justifyContent: open ? 'initial' : 'center',
                padding: open ? 0 : theme.spacing(0.5, 1, 0.5, 1),
                margin: open ? 0 : theme.spacing(0, 1.25, 0, 1.25),
                px: open ? 2.5 : 1.25,
                borderRadius: open ? 0 : theme.shape.borderRadius,
                transition: theme.transitions.create('border-radius', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.shorter,
                }),
                ...(Router.pathname.startsWith(each.href) && {
                  backgroundColor: 'rgba(184, 36, 79, 0.1)',
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: 'rgba(184, 36, 79, 0.1)',
                  },
                }),
              })}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 4 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={each.label}
                  height={'24px'}
                  src={Router.pathname.startsWith(each.href) ? each.activeIcon : each.icon}
                  width={'24px'}
                />
              </ListItemIcon>
              <ListItemText
                primary={each.label}
                sx={(theme) => ({
                  opacity: open ? 1 : 0,
                  '.MuiTypography-root': {
                    fontSize: '0.95rem',
                    color: theme.palette.text.secondary,
                    ...(Router.pathname.startsWith(each.href) && {
                      color: theme.palette.primary.main,
                    }),
                  },
                })}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default DashboardDrawer;
