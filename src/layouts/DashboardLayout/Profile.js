import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useGlobalData } from '../../store/GlobalContext';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import restApp, { authCookieName, cookieStorageRemoveItem } from '../../apis/rest.app';
import Link from '../../components/Link';

const Profile = () => {
  const translations = useTranslations('layout.dashboard.profile');
  const Router = useRouter();
  const [user, setUser] = useGlobalData();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    cookieStorageRemoveItem(authCookieName);
    localStorage.removeItem(authCookieName);
    restApp.logout().then(() => {
      Router.push('/');
    });
  };
  return (
    <React.Fragment>
      <Tooltip title={translations('settings')}>
        <IconButton
          aria-controls={open ? 'account-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
          sx={(theme) => ({
            margin: theme.spacing(2, 0, 2, 1),
          })}
        >
          <Avatar sx={{ width: 42, height: 42 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,0.32))',
            mt: 1.5,
            width: '250px',
            borderRadius: 2,
            '& .MuiAvatar-root': {
              width: 40,
              height: 40,
            },
            '& .MuiMenuItem-root': {
              fontSize: '0.875rem',
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 22,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        id="account-menu"
        onClick={handleClose}
        onClose={handleClose}
        open={open}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <Box alignItems={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'} p={2}>
          <Avatar>M</Avatar>
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '1rem',
              marginTop: theme.spacing(1),
              color: theme.palette.primary.main,
            })}
          >
            {user?.firstName ? translations('name', { firstName: user.firstName, lastName: user.lastName }) : '---'}
          </Typography>
          <Typography
            sx={(theme) => ({
              ...theme.typography.body1,
              fontSize: '0.8rem',
              lineHeight: 1,
            })}
          >
            {user?.email || '---'}
          </Typography>
        </Box>
        <Divider
          sx={(theme) => ({
            marginBottom: theme.spacing(1),
          })}
        />
        <MenuItem component={Link} href={'/edit-profile'}>
          <ListItemIcon>
            <ModeEditOutlineOutlinedIcon color={'primary'} fontSize="small" />
          </ListItemIcon>
          {translations('edit-profile')}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalActivityOutlinedIcon color={'primary'} fontSize="small" />
          </ListItemIcon>
          {translations('my-tickets')}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon color={'primary'} fontSize="small" />
          </ListItemIcon>
          {translations('settings')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppOutlinedIcon color={'primary'} fontSize="small" />
          </ListItemIcon>
          {translations('logout')}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Profile;
