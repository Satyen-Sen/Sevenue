import * as React from 'react';
import Logo from '../../assets/logo/sevenue_logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Link from '../../components/Link';

const DefaultHeader = () => {
  const translations = useTranslations('layout.default');
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
            <Box height={'100px'} pt={4} py={3}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="logo" height={'100%'} src={Logo} />
            </Box>
            <Box alignItems={'center'} display={'flex'} justifyContent={'center'}>
              <Link
                href="/login"
                sx={(theme) => ({
                  textDecoration: 'none',
                  padding: theme.spacing(0, 2),
                })}
              >
                <Typography color={'textSecondary'} fontWeight={'normal'}>
                  {translations('register')}
                </Typography>
              </Link>
              <Button
                component={Link}
                href={'/login'}
                sx={(theme) => ({
                  padding: theme.spacing(1.2, 5),
                  borderRadius: Math.round(theme.shape.borderRadius - 4),
                  boxShadow: 'none',
                  textTransform: 'capitalize',
                  fontWeight: theme.typography.fontWeightBold,
                })}
                variant={'contained'}
              >
                {translations('login')}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default DefaultHeader;
