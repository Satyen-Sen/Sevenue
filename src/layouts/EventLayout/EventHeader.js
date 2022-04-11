import * as React from 'react';
import Logo from '../../assets/logo/vec_logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router';
import language from '../../../config/languages.json';
import Link from 'next/link';
import DoneIcon from '@mui/icons-material/Done';

const StyledMenu = styled((props) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    elevation={0}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 15,
    marginTop: theme.spacing(1),
    minWidth: 150,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenuItem-root': {
      fontSize: 15,
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const EventHeader = () => {
  const Router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { locale, route } = Router;

  return (
    <React.Fragment>
      <AppBar
        color={'inherit'}
        position="static"
        sx={() => ({
          boxShadow: '0 -0.5px 4px 0 rgba(0, 0, 0, 0.16)',
        })}
      >
        <Toolbar>
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
            <Box height={'100px'} py={2}>
              <Box
                py={1.5}
                sx={{
                  paddingTop: 2,
                  backgroundColor: '#f8e9ee',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="logo" height={'100%'} src={Logo} />
              </Box>
            </Box>
            <Box alignItems={'center'} display={'flex'} justifyContent={'center'}>
              <Button
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                disableElevation
                endIcon={<KeyboardArrowDownIcon />}
                id="demo-customized-button"
                onClick={handleClick}
                sx={(theme) => ({
                  borderRadius: 15,
                  borderColor: theme.palette.grey[400],
                  color: theme.palette.text.secondary,
                  textTransform: 'capitalize',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
                  },
                })}
                variant="outlined"
              >
                {language.locales.find((item) => item.key === locale).name || 'English'}
              </Button>
              <StyledMenu
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                id="demo-customized-menu"
                onClose={handleClose}
                open={open}
              >
                {language.locales.map((each) => (
                  <Link href={route} key={each.key} locale={each.key} passHref>
                    <MenuItem disableRipple onClick={handleClose}>
                      <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                        {each.name}
                        {locale === each.key && <DoneIcon />}
                      </Box>
                    </MenuItem>
                  </Link>
                ))}
              </StyledMenu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default EventHeader;
