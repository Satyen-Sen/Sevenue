import * as React from 'react';
import getPageMessages from '../utils/getPageMessages';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Page404 = () => {
  return (
    <Box alignItems={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'} py={10}>
      <Typography
        sx={(theme) => ({
          ...theme.typography.h1,
          color: theme.palette.primary.main,
          fontSize: theme.typography.fontSize * 15,
        })}
      >
        404
      </Typography>
      <p>Page not found</p>
    </Box>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages(undefined, locale),
    },
  };
};

export default Page404;
