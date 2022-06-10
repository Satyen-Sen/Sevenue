import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Logo from '../assets/logo/sevenue_logo.svg';
import Container from '@mui/material/Container';
import { useTranslations } from 'next-intl';

const PageWrapper = ({ children }) => {
  const translations = useTranslations();
  return (
    <Container maxWidth={'xs'}>
      <Box
        alignItems={'center'}
        display={'flex'}
        flexDirection={'column'}
        height={'85vh'}
        justifyContent={'space-between'}
      >
        <Box />
        {children}

        <Box sx={{ my: 4 }}>
          <Typography
            align={'center'}
            sx={(theme) => ({
              ...theme.typography.h6,
              fontSize: '1rem',
              fontWeight: theme.typography.fontWeightBold,
              color: 'text.secondary',
              marginBottom: theme.spacing(1),
            })}
          >
            {translations('powered-by')}
          </Typography>
          <Box
            sx={(theme) => ({
              height: theme.spacing(7),
            })}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'Logo'} height={'100%'} src={Logo} width={'100%'} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
