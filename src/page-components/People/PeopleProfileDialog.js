import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useTranslations } from 'next-intl';

const PeopleProfileDialog = ({ openProfile, setOpenProfile, person }) => {
  const translations = useTranslations();
  const description = `${person?.userInfo?.jobTitle || '---'}, ${person?.userInfo?.company || '---'}`;
  const handleClose = () => {
    setOpenProfile(false);
  };

  return (
    <React.Fragment>
      <Dialog maxWidth={'md'} onClose={handleClose} open={openProfile}>
        <DialogTitle sx={() => ({ display: 'flex', justifyContent: 'end' })}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={(theme) => ({ padding: theme.spacing(4), maxWidth: '750px' })}>
          <Box alignItems={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={0}>
            <Avatar
              alt={'Profile'}
              src={person.avatar || null}
              sx={(theme) => ({ height: theme.spacing(12), width: theme.spacing(12) })}
            />
            <Typography
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1.5rem',
                paddingTop: 1,
              })}
            >
              {person?.firstName} {person?.lastName}
            </Typography>
            <Typography
              sx={(theme) => ({ ...theme.typography.subtitle1, fontSize: '1rem', color: theme.palette.text.primary })}
            >
              {description}
            </Typography>
            <Stack direction="row" spacing={2} sx={() => ({ padding: 1, paddingBottom: 2 })}>
              <Button
                startIcon={<PhotoCameraFrontIcon color={'primary'} />}
                sx={(theme) => ({ borderColor: theme.palette.divider, textTransform: 'capitalize', color: 'inherit' })}
                variant="outlined"
              >
                {translations('video-call')}
              </Button>
              <Button
                startIcon={<ChatIcon color={'primary'} />}
                sx={(theme) => ({ borderColor: theme.palette.divider, textTransform: 'capitalize', color: 'inherit' })}
                variant="outlined"
              >
                {translations('send-message')}
              </Button>
              <Button
                startIcon={<CalendarMonthIcon color={'primary'} />}
                sx={(theme) => ({ borderColor: theme.palette.divider, textTransform: 'capitalize', color: 'inherit' })}
                variant="outlined"
              >
                {translations('schedule-meeting')}
              </Button>
            </Stack>
            <Box
              bgcolor="#F5F5F7"
              display={'flex'}
              flexDirection={'column'}
              mb={-1}
              sx={(theme) => ({
                borderRadius: 1,
                padding: theme.spacing(2, 4),
                border: '1px solid',
                borderColor: theme.palette.divider,
              })}
              width={'100%'}
            >
              <Typography
                sx={(theme) => ({
                  ...theme.typography.body2,
                  fontSize: '0.9rem',
                  color: theme.palette.text.secondary,
                })}
              >
                {person?.userInfo?.about || translations('description-not-provided')}
              </Typography>
              {person?.interests?.length
                ? person?.interests.map((each) => (
                    <React.Fragment key={each.type}>
                      <Typography
                        sx={(theme) => ({
                          ...theme.typography.h4,
                          fontWeight: theme.typography.fontWeightBold,
                          fontSize: '20px',
                          mt: theme.spacing(2),
                          mb: theme.spacing(1),
                        })}
                      >
                        {each?.type || ''}
                      </Typography>
                      <Box
                        bgcolor="common.white"
                        borderRadius={1}
                        display={'flex'}
                        flexDirection={'column'}
                        padding={2}
                        sx={{ boxShadow: '0px 0px 2px 0px rgb(0 0 0 / 20%)' }}
                      >
                        <Grid container spacing={1}>
                          {each?.values?.length ? (
                            each.values.map((item) => (
                              <Grid item key={item} md={6} sm={6} xs={12}>
                                <Typography
                                  sx={(theme) => ({
                                    ...theme.typography.body2,
                                    fontSize: '13px',
                                    color: theme.palette.text.primary,
                                    padding: theme.spacing(0, 2),
                                  })}
                                >
                                  {<span>&#8226;</span>} {item}
                                </Typography>
                              </Grid>
                            ))
                          ) : (
                            <Grid item md={6} sm={6} xs={12}>
                              <Typography
                                sx={(theme) => ({
                                  ...theme.typography.body2,
                                  fontSize: '13px',
                                  color: theme.palette.text.primary,
                                  padding: theme.spacing(0, 2),
                                })}
                              >
                                {translations('data-not-provided')}
                              </Typography>
                            </Grid>
                          )}
                        </Grid>
                      </Box>
                    </React.Fragment>
                  ))
                : ''}
              <Typography
                sx={(theme) => ({
                  ...theme.typography.h4,
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '20px',
                  mt: theme.spacing(2),
                  mb: theme.spacing(1),
                })}
              >
                {translations('looking-for')}
              </Typography>
              <Box
                bgcolor="common.white"
                borderRadius={1}
                display={'flex'}
                flexDirection={'column'}
                padding={2}
                sx={{ boxShadow: '0px 0px 2px 0px rgb(0 0 0 / 20%)' }}
              >
                <Grid container spacing={1}>
                  {person?.matching?.lookingFor?.length ? (
                    person?.matching?.lookingFor.map((item) => (
                      <Grid item key={item} md={6} sm={6} xs={12}>
                        <Typography
                          sx={(theme) => ({
                            ...theme.typography.body2,
                            fontSize: '13px',
                            color: theme.palette.text.primary,
                            padding: theme.spacing(0, 2),
                          })}
                        >
                          {<span>&#8226;</span>} {item}
                        </Typography>
                      </Grid>
                    ))
                  ) : (
                    <Grid item md={6} sm={6} xs={12}>
                      <Typography
                        sx={(theme) => ({
                          ...theme.typography.body2,
                          fontSize: '13px',
                          color: theme.palette.text.primary,
                          padding: theme.spacing(0, 2),
                        })}
                      >
                        {translations('data-not-provided')}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Box>
              <Typography
                sx={(theme) => ({
                  ...theme.typography.h4,
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '20px',
                  mt: theme.spacing(2),
                  mb: theme.spacing(1),
                })}
              >
                {translations('offering')}
              </Typography>
              <Box
                bgcolor="common.white"
                borderRadius={1}
                display={'flex'}
                flexDirection={'column'}
                padding={2}
                sx={{ boxShadow: '0px 0px 2px 0px rgb(0 0 0 / 20%)' }}
              >
                <Grid container spacing={1}>
                  {person?.matching?.offering?.length ? (
                    person?.matching?.offering.map((item) => (
                      <Grid item key={item} md={6} sm={6} xs={12}>
                        <Typography
                          sx={(theme) => ({
                            ...theme.typography.body2,
                            fontSize: '13px',
                            color: theme.palette.text.primary,
                            padding: theme.spacing(0, 2),
                          })}
                        >
                          {<span>&#8226;</span>} {item}
                        </Typography>
                      </Grid>
                    ))
                  ) : (
                    <Grid item md={6} sm={6} xs={12}>
                      <Typography
                        sx={(theme) => ({
                          ...theme.typography.body2,
                          fontSize: '13px',
                          color: theme.palette.text.primary,
                          padding: theme.spacing(0, 2),
                        })}
                      >
                        {translations('data-not-provided')}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

PeopleProfileDialog.propTypes = {
  openProfile: PropTypes.bool.isRequired,
  setOpenProfile: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired,
};

export default PeopleProfileDialog;
