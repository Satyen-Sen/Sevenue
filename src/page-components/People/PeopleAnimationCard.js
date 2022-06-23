import * as React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PeopleProfileDialog from './PeopleProfileDialog';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FavouriteService } from '../../apis/rest.app';
import { useGlobalData } from '../../store/GlobalContext';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const PeopleAnimationCard = ({ person }) => {
  const translations = useTranslations();
  const [, , event] = useGlobalData();
  const { enqueueSnackbar } = useSnackbar();
  const description = `${person?.userInfo?.jobTitle || '---'}, ${person?.userInfo?.company || '---'}`;
  const [hover, setHover] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  const [isFavoriteId, setIsFavoriteId] = React.useState('');
  const [isFavoriteLoading, setIsFavoriteLoading] = React.useState(false);

  const handleFavorite = () => {
    setIsFavoriteLoading(true);
    FavouriteService.create({
      user: person._id,
      org: event?.org?._id,
      event: event?._id,
    })
      .then((res) => {
        if (res) {
          setIsFavoriteLoading(false);
          setIsFavoriteId(res?._id);
        }
      })
      .catch((err) => {
        setIsFavoriteLoading(false);
        enqueueSnackbar((err && err.message) || 'Something went wrong', { variant: 'error' });
      });
  };

  const handleUnFavorite = () => {
    if (isFavoriteId === '') return;
    setIsFavoriteLoading(true);
    FavouriteService.remove(isFavoriteId)
      .then((res) => {
        if (res) {
          setIsFavoriteLoading(false);
          setIsFavoriteId('');
        }
      })
      .catch((err) => {
        setIsFavoriteLoading(false);
        enqueueSnackbar((err && err.message) || 'Something went wrong', { variant: 'error' });
      });
  };

  useEffect(() => {
    if (!person || !person?.favourite) return;
    setIsFavoriteId(person?.favourite?._id);
  }, [person]);

  return (
    <React.Fragment>
      <Paper
        elevation={0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          border: '1px solid #e6e6e6',
        })}
      >
        <Box display={'flex'} width={'100%'}>
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
              src={person.avatar || null}
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
          <Box alignItems={'start'} display={'flex'} height={'100%'} justifyContent={'center'} width={'100%'}>
            <Box height={'100%'} width={'100%'}>
              <Box display={'flex'} width={'100%'}>
                <Box flex={0.8}>
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
                </Box>
                <Box display={'flex'} flex={0.2} justifyContent={'end'}>
                  <Box>
                    <LoadingButton
                      disabled={isFavoriteLoading}
                      loading={isFavoriteLoading}
                      onClick={isFavoriteId !== '' ? handleUnFavorite : handleFavorite}
                      sx={(theme) => ({
                        marginTop: theme.spacing(hover ? 2 : 4),
                        marginRight: theme.spacing(1.7),
                        padding: theme.spacing(0.5, 0.5),
                        borderRadius: 0.5,
                        minWidth: 0,
                        color: 'inherit',
                        borderColor: theme.palette.divider,
                        // opacity: hover ? 1 : 0,
                        transition: theme.transitions.create(['opacity', 'margin-top'], {
                          duration: '0.4s',
                          easing: theme.transitions.easing.easeInOut,
                        }),
                      })}
                      variant={'outlined'}
                    >
                      {isFavoriteId !== '' ? (
                        <BookmarkIcon color={'primary'} fontSize={'inherit'} />
                      ) : (
                        <BookmarkBorderIcon color={'primary'} fontSize={'inherit'} />
                      )}
                    </LoadingButton>
                  </Box>
                </Box>
              </Box>
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
                  mt: 0.2,
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
      {openProfile && <PeopleProfileDialog openProfile={openProfile} person={person} setOpenProfile={setOpenProfile} />}
    </React.Fragment>
  );
};

PeopleAnimationCard.propTypes = {
  person: PropTypes.object,
};

export default PeopleAnimationCard;
