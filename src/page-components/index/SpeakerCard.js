import * as React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IMG from '../../assets/landing/temp_profile_image.png';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import SpeakerProfileDetailsDialog from './SpeakerProfileDetailsDialog';

const SpeakerCard = () => {
  const translations = useTranslations();
  const [hover, setHover] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  return (
    <React.Fragment>
      <Paper
        elevation={0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={(theme) => ({
          backgroundColor: '#f5f5f7',
          border: '1px solid #f5f5f5',
          '&:hover': {
            backgroundColor: '#f8e9ee',
            borderColor: theme.palette.primary.main,
          },
        })}
      >
        <Box display={'flex'}>
          <Box>
            <Avatar
              src={IMG}
              sx={(theme) => ({
                height: theme.spacing(8),
                width: theme.spacing(8),
                // marginRight: theme.spacing(2),
                margin: theme.spacing(2),
              })}
            />
          </Box>
          <Box alignItems={'start'} display={'flex'} height={'100%'} justifyContent={'center'}>
            <Box height={'100%'}>
              <Typography
                sx={(theme) => ({
                  ...theme.typography.h4,
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  marginTop: theme.spacing(hover ? 2 : 4),
                  transition: theme.transitions.create(['margin-top'], {
                    duration: '0.4s',
                    easing: theme.transitions.easing.easeInOut,
                  }),
                })}
              >
                {'Speaker Name'}
              </Typography>
              <Typography
                sx={(theme) => ({
                  ...theme.typography.subtitle1,
                  fontSize: '0.7rem',
                  color: theme.palette.text.secondary,
                })}
              >
                {'Designation, Company name'}
              </Typography>
              <Button
                onClick={() => setOpenProfile(true)}
                size={'small'}
                startIcon={<VisibilityOutlinedIcon />}
                sx={(theme) => ({
                  ...theme.typography.button,
                  fontSize: '0.7rem',
                  padding: theme.spacing(0.3, 2),
                  border: '1px solid',
                  textTransform: 'none',
                  borderColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.primary.main,
                  },
                  opacity: hover ? 1 : 0,
                  transition: theme.transitions.create(['opacity'], {
                    duration: '0.6s',
                    easing: theme.transitions.easing.easeInOut,
                  }),
                })}
                variant={'contained'}
              >
                {translations('tabDetail.view-profile')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
      <SpeakerProfileDetailsDialog openProfile={openProfile} setOpenProfile={setOpenProfile} />
    </React.Fragment>
  );
};

export default SpeakerCard;
