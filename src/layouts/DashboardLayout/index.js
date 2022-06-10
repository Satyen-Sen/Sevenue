import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../DefaultLayout/theme';
import DashboardHeader from './DashboardHeader';
import DashboardDrawer from './DashboardDrawer';
import Box from '@mui/material/Box';

const DashboardLayout = ({ children }) => {
  return (
    <React.Fragment>
      {/*<Head>*/}
      {/*    <meta name="viewport" content="initial-scale=1, width=device-width" />*/}
      {/*</Head>*/}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/*{error ? <Error statusCode={error.code} /> : children}*/}
        {/*{children}*/}
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <DashboardHeader />
          <DashboardDrawer />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Box
              sx={(theme) => ({
                height: theme.spacing(11),
              })}
            />
            <Box sx={{ p: 5 }}>{children}</Box>
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

DashboardLayout.defaultProps = {
  // error: null,
  // loadDefaults: false,
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  // error: PropTypes.object,
  // loadDefaults: PropTypes.bool,
};

export default DashboardLayout;
