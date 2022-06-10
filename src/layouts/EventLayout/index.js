import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../DefaultLayout/theme';
import EventHeader from './EventHeader';
// import DefaultHeader from './DefaultHeader';

const EventLayout = ({ children }) => {
  return (
    <React.Fragment>
      {/*<Head>*/}
      {/*    <meta name="viewport" content="initial-scale=1, width=device-width" />*/}
      {/*</Head>*/}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/*{error ? <Error statusCode={error.code} /> : children}*/}
        <EventHeader />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

EventLayout.defaultProps = {
  // error: null,
  // loadDefaults: false,
};

EventLayout.propTypes = {
  children: PropTypes.node.isRequired,
  // error: PropTypes.object,
  // loadDefaults: PropTypes.bool,
};

export default EventLayout;
