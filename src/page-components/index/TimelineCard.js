import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import { useTranslations } from 'next-intl';
import SpeakerAvatar from './SpeakerAvatar';

const TimelineCard = () => {
  const translations = useTranslations();
  return (
    <Paper
      sx={(theme) => ({
        padding: theme.spacing(2),
        boxShadow: '0 0.5px 3px 0 rgba(0, 0, 0, 0.16)',
        border: 'solid 0.5px #f4f4f6',
        marginBottom: theme.spacing(2),
      })}
    >
      <Typography
        sx={(theme) => ({
          ...theme.typography.h4,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1rem',
        })}
      >
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </Typography>
      <Typography
        sx={(theme) => ({
          ...theme.typography.h5,
          fontSize: '0.8rem',
          color: theme.palette.text.secondary,
          marginTop: theme.spacing(1),
        })}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet finibus ipsum, a interdum risus. Fusce
        in scelerisque sapien. Lorem ipsum dolor sit amet.
        <br />
        Fusce eleifend orci vitae est dictum, porttitor pharetra enim luctus. Nunc semper nisi quis fermentum consequat.
        Vestibulum ante ipsum primis in faucibus orci luctus et …
      </Typography>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(2),
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <Box display={'flex'}>
          <SpeakerAvatar />
          <SpeakerAvatar />
          <SpeakerAvatar />
          <Avatar
            alt="Remy Sharp"
            src="/broken-image.jpg"
            sx={(theme) => ({
              height: theme.spacing(4),
              width: theme.spacing(4),
              backgroundColor: theme.palette.text.secondary,
              fontSize: '0.9rem',
              marginRight: theme.spacing(0.5),
            })}
          >
            +3
          </Avatar>
        </Box>
        <Button
          size="small"
          sx={(theme) => ({
            fontSize: '0.8rem',
            width: theme.spacing(15),
            textTransform: 'none',
          })}
          variant={'contained'}
        >
          {translations('tabDetail.view-details')}
        </Button>
      </Box>
    </Paper>
  );
};

export default TimelineCard;
