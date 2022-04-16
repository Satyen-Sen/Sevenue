import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ScheduleDateCard = () => {
  return (
    <Box
      sx={(theme) => ({
        color: theme.palette.primary.main,
        border: '2px solid',
        padding: theme.spacing(1, 1.5, 1, 1.5),
        marginRight: theme.spacing(1),
        borderColor: theme.palette.primary.main,
        borderRadius: 2,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      })}
    >
      <Box display={'flex'}>
        <Typography
          sx={(theme) => ({
            ...theme.typography.h4,
            fontSize: '1.7rem',
            fontWeight: 'bold',
          })}
        >
          23
        </Typography>
        <Typography
          sx={(theme) => ({
            ...theme.typography.subtitle1,
            fontSize: '0.8rem',
            margin: theme.spacing(1.2, 0, 0, 0.5),
          })}
        >
          Tue
        </Typography>
      </Box>
      <Typography
        sx={(theme) => ({
          ...theme.typography.h5,
          fontSize: '1rem',
          fontWeight: theme.typography.fontWeightBold,
          lineHeight: 1,
        })}
      >
        October
      </Typography>
    </Box>
  );
};

export default ScheduleDateCard;
