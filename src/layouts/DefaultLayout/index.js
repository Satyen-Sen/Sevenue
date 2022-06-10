import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import DefaultHeader from './DefaultHeader';

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      {/*<Head>*/}
      {/*    <meta name="viewport" content="initial-scale=1, width=device-width" />*/}
      {/*</Head>*/}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/*{error ? <Error statusCode={error.code} /> : children}*/}
        <DefaultHeader />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

DefaultLayout.defaultProps = {
  // error: null,
  // loadDefaults: false,
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  // error: PropTypes.object,
  // loadDefaults: PropTypes.bool,
};

export default DefaultLayout;
