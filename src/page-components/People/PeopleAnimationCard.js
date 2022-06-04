import * as React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IMG from '../../assets/landing/temp_profile_image.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PeopleProfileDialog from './PeopleProfileDialog';

const PeopleAnimationCard = ({ person }) => {
  const translations = useTranslations();
  const description = `${person?.userInfo?.jobTitle || '---'}, ${person?.userInfo?.company || '---'}`;
  const [hover, setHover] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  return (
    <React.Fragment>
      <Paper
        elevation={0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          border: '1px solid #f5f5f5',
        })}
      >
        <Box display={'flex'}>
          <Box
            onClick={() => setOpenProfile(true)}
            sx={(theme) => ({
              height: theme.spacing(12.5),
              width: theme.spacing(hover ? 10 : 12),
              cursor: 'pointer',
              transition: theme.transitions.create(['width'], {
                duration: '0.4s',
                easing: theme.transitions.easing.easeInOut,
              }),
            })}
          >
            <Avatar
              src={IMG}
              sx={(theme) => ({
                height: theme.spacing(hover ? 6 : 8),
                width: theme.spacing(hover ? 6 : 8),
                // marginRight: theme.spacing(2),
                margin: theme.spacing(2.25, 2, 2.25, 2),
                transition: theme.transitions.create(['width', 'height'], {
                  duration: '0.4s',
                  easing: theme.transitions.easing.easeInOut,
                }),
              })}
            />
          </Box>
          <Box alignItems={'start'} display={'flex'} height={'100%'} justifyContent={'center'}>
            <Box height={'100%'}>
              <Typography
                onClick={() => setOpenProfile(true)}
                sx={(theme) => ({
                  ...theme.typography.h4,
                  cursor: 'pointer',
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  marginTop: theme.spacing(hover ? 2 : 4),
                  transition: theme.transitions.create(['margin-top'], {
                    duration: '0.4s',
                    easing: theme.transitions.easing.easeInOut,
                  }),
                })}
              >
                {person?.firstName} {person?.lastName}
              </Typography>
              <Typography
                onClick={() => setOpenProfile(true)}
                sx={(theme) => ({
                  ...theme.typography.subtitle1,
                  cursor: 'pointer',
                  fontSize: '0.7rem',
                  color: theme.palette.text.secondary,
                })}
              >
                {description.length > 40 ? description.substring(0, 37) + '...' : description}
              </Typography>
              <Button
                disableElevation
                size={'small'}
                startIcon={<MessageOutlinedIcon />}
                sx={(theme) => ({
                  ...theme.typography.button,
                  fontSize: '0.7rem',
                  mt: 0.5,
                  padding: theme.spacing(0.3, 2),
                  border: '1px solid',
                  backgroundColor: '#f5f5f7',
                  color: theme.palette.text.secondary,
                  textTransform: 'none',
                  borderColor: '#f5f5f7',
                  borderRadius: '1px',
                  boxShadow: '0px 0px 3px 0px rgb(22 22 22 / 16%)',
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
                {translations('message')}
              </Button>
              <Button
                // onClick={() => setOpenProfile(true)}
                disableElevation
                size={'small'}
                startIcon={<DateRangeOutlinedIcon />}
                sx={(theme) => ({
                  ...theme.typography.button,
                  fontSize: '0.7rem',
                  padding: theme.spacing(0.3, 2),
                  border: '1px solid',
                  backgroundColor: '#f5f5f7',
                  ml: 1,
                  color: theme.palette.text.secondary,
                  textTransform: 'none',
                  borderColor: '#f5f5f7',
                  borderRadius: '1px',
                  boxShadow: '0px 0px 3px 0px rgb(22 22 22 / 16%)',
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
                {translations('schedule-meeting')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
      <PeopleProfileDialog openProfile={openProfile} person={person} setOpenProfile={setOpenProfile} />
    </React.Fragment>
  );
};

PeopleAnimationCard.propTypes = {
  person: PropTypes.object,
};

export default PeopleAnimationCard;
