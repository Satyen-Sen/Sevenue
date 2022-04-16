import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PopupState, { bindHover, bindPopover } from 'material-ui-popup-state';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import Button from '@mui/material/Button';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import IMG from '../../assets/landing/temp_profile_image.png';
import { useTranslations } from 'next-intl';
import SpeakerProfileDetailsDialog from './SpeakerProfileDetailsDialog';

const SpeakerAvatar = () => {
  const translations = useTranslations();
  const [openProfile, setOpenProfile] = React.useState(false);
  return (
    <React.Fragment>
      <PopupState popupId="demoPopover" variant="popover">
        {(popupState) => (
          <div>
            <Avatar
              alt="img"
              aria-haspopup="true"
              {...bindHover(popupState)}
              src={IMG}
              sx={(theme) => ({
                height: theme.spacing(4),
                width: theme.spacing(4),
                marginRight: theme.spacing(0.5),
                cursor: 'pointer',
              })}
            />
            <HoverPopover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <Paper
                sx={(theme) => ({
                  border: '1px solid',
                  borderColor: theme.palette.primary.main,
                  padding: theme.spacing(2),
                  maxWidth: theme.spacing(22),
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                })}
              >
                <Avatar
                  alt="img"
                  src={IMG}
                  sx={(theme) => ({
                    height: theme.spacing(7),
                    width: theme.spacing(7),
                  })}
                />
                <Typography
                  align={'center'}
                  sx={(theme) => ({
                    ...theme.typography.h4,
                    fontSize: '0.8rem',
                    fontWeight: theme.typography.fontWeightBold,
                    margin: theme.spacing(1, 0),
                  })}
                >
                  {'Tun Kanak Sam  dri Snagrma Thakur'}
                </Typography>
                <Typography
                  align={'center'}
                  sx={(theme) => ({
                    ...theme.typography.subtitle1,
                    fontSize: '0.7rem',
                    color: theme.palette.text.secondary,
                    lineHeight: '0.8rem',
                  })}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
                <Button
                  onClick={() => setOpenProfile(true)}
                  size={'small'}
                  startIcon={<VisibilityOutlinedIcon />}
                  sx={(theme) => ({
                    ...theme.typography.button,
                    fontSize: '0.7rem',
                    marginTop: theme.spacing(1),
                    padding: theme.spacing(0.5, 2),
                    border: '1px solid',
                    textTransform: 'none',
                    borderColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.common.white,
                      color: theme.palette.primary.main,
                    },
                  })}
                  variant={'contained'}
                >
                  {translations('tabDetail.view-profile')}
                </Button>
              </Paper>
            </HoverPopover>
          </div>
        )}
      </PopupState>
      <SpeakerProfileDetailsDialog openProfile={openProfile} setOpenProfile={setOpenProfile} />
    </React.Fragment>
  );
};

export default SpeakerAvatar;
