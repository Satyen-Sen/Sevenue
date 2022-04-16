import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import IMG from '../../assets/landing/temp_profile_image.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import PropTypes from 'prop-types';

const SpeakerProfileDetailsDialog = ({ openProfile, setOpenProfile }) => {
  const handleClose = () => {
    setOpenProfile(false);
  };
  return (
    <React.Fragment>
      <Dialog maxWidth={'md'} onClose={handleClose} open={openProfile}>
        <DialogTitle
          sx={() => ({
            display: 'flex',
            justifyContent: 'end',
          })}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={(theme) => ({
            padding: theme.spacing(8),
            maxWidth: '750px',
            height: '650px',
          })}
        >
          <Box display={'flex'} flexDirection={'column'}>
            <ListItem
              sx={(theme) => ({
                padding: theme.spacing(0),
              })}
            >
              <ListItemAvatar>
                <Avatar
                  sx={(theme) => ({
                    height: theme.spacing(10),
                    width: theme.spacing(10),
                    marginRight: theme.spacing(2),
                  })}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="profile" height={'100%'} src={IMG} width={'100%'} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={(theme) => ({
                      ...theme.typography.h4,
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: '1.7rem',
                    })}
                  >
                    {'Speaker Name'}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={(theme) => ({
                      ...theme.typography.subtitle1,
                      fontSize: '0.8rem',
                      color: theme.palette.text.secondary,
                    })}
                  >
                    {'Designation, Company name'}
                  </Typography>
                }
              />
            </ListItem>

            <Typography
              sx={(theme) => ({
                ...theme.typography.body2,
                fontSize: '1rem',
                margin: theme.spacing(2, 0),
              })}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet finibus ipsum, a interdum risus.
              Fusce in scelerisque sapien. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam sit amet finibus ipsum, a interdum risus. Fusce in scelerisque sapien. Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet finibus ipsum, a
              interdum risus. Fusce in scelerisque sapien. Lorem ipsum dolor sit amet.
            </Typography>
            <Paper
              elevation={0}
              sx={(theme) => ({
                borderRadius: theme.shape.borderRadius - 2,
                padding: theme.spacing(3),
                border: '1px solid',
                borderColor: theme.palette.divider,
                marginTop: theme.spacing(2),
              })}
            >
              <Typography
                sx={(theme) => ({
                  ...theme.typography.body2,
                  fontSize: '1rem',
                  color: theme.palette.text.secondary,
                })}
              >
                02:00 PM - 03:00 PM, 26th June 2020
              </Typography>
              <Typography
                sx={(theme) => ({
                  ...theme.typography.body2,
                  fontSize: '0.8rem',
                  fontWeight: theme.typography.fontWeightBold,
                })}
              >
                Navigationthe new way to get to the point where you can start to build your own
              </Typography>
              <List>
                <ListItem
                  sx={(theme) => ({
                    padding: theme.spacing(0),
                  })}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="profile" height={'100%'} src={IMG} width={'100%'} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography fontWeight={'bold'}>{'Speaker Name'}</Typography>}
                    secondary={
                      <Typography color={'text.secondary'} variant={'subtitle2'}>
                        {'Designation, Company name'}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem
                  sx={(theme) => ({
                    padding: theme.spacing(0),
                  })}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="profile" height={'100%'} src={IMG} width={'100%'} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography fontWeight={'bold'}>{'Speaker Name'}</Typography>}
                    secondary={
                      <Typography color={'text.secondary'} variant={'subtitle2'}>
                        {'Designation, Company name'}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem
                  sx={(theme) => ({
                    padding: theme.spacing(0),
                  })}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="profile" height={'100%'} src={IMG} width={'100%'} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography fontWeight={'bold'}>{'Speaker Name'}</Typography>}
                    secondary={
                      <Typography color={'text.secondary'} variant={'subtitle2'}>
                        {'Designation, Company name'}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
            <Paper
              elevation={0}
              sx={(theme) => ({
                borderRadius: theme.shape.borderRadius - 2,
                padding: theme.spacing(3),
                border: '1px solid',
                borderColor: theme.palette.divider,
                marginTop: theme.spacing(2),
              })}
            >
              <Typography
                sx={(theme) => ({
                  ...theme.typography.body2,
                  fontSize: '1rem',
                  color: theme.palette.text.secondary,
                })}
              >
                02:00 PM - 03:00 PM, 26th June 2020
              </Typography>
              <Typography
                sx={(theme) => ({
                  ...theme.typography.body2,
                  fontSize: '0.8rem',
                  fontWeight: theme.typography.fontWeightBold,
                })}
              >
                Navigationthe new way to get to the point where you can start to build your own
              </Typography>
              <List>
                <ListItem
                  sx={(theme) => ({
                    padding: theme.spacing(0),
                  })}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="profile" height={'100%'} src={IMG} width={'100%'} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography fontWeight={'bold'}>{'Speaker Name'}</Typography>}
                    secondary={
                      <Typography color={'text.secondary'} variant={'subtitle2'}>
                        {'Designation, Company name'}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem
                  sx={(theme) => ({
                    padding: theme.spacing(0),
                  })}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="profile" height={'100%'} src={IMG} width={'100%'} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography fontWeight={'bold'}>{'Speaker Name'}</Typography>}
                    secondary={
                      <Typography color={'text.secondary'} variant={'subtitle2'}>
                        {'Designation, Company name'}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem
                  sx={(theme) => ({
                    padding: theme.spacing(0),
                  })}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="profile" height={'100%'} src={IMG} width={'100%'} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography fontWeight={'bold'}>{'Speaker Name'}</Typography>}
                    secondary={
                      <Typography color={'text.secondary'} variant={'subtitle2'}>
                        {'Designation, Company name'}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

SpeakerProfileDetailsDialog.propTypes = {
  openProfile: PropTypes.bool.isRequired,
  setOpenProfile: PropTypes.func.isRequired,
};

export default SpeakerProfileDetailsDialog;
