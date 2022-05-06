import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useIntl, useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Facebook from '../../assets/login/facebook.svg';
import Linkedin from '../../assets/login/linkedin.svg';
import { useGlobalData } from '../../store/GlobalContext';
import Link from '../../components/Link';
import { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import MuiLink from '@mui/material/Link';

const SocialButton = ({ icon, url, alt, isMuiIcon }) => {
  return (
    <Button
      color={'inherit'}
      component={MuiLink}
      href={url}
      sx={(theme) => ({
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
        minWidth: theme.spacing(0),
        padding: theme.spacing(0),
        margin: theme.spacing(2, 0, 0, 1),
      })}
      target={'_blank'}
    >
      {isMuiIcon ? (
        { icon }
      ) : (
        //eslint-disable-next-line @next/next/no-img-element
        <img alt={alt || 'Img'} height={'100%'} src={icon} width={'100%'} />
      )}
    </Button>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isMuiIcon: PropTypes.bool,
};

SocialButton.defaultProps = {
  isMuiIcon: false,
};

const TimerBlock = ({ value }) => {
  return (
    <Box
      sx={(theme) => ({
        ...theme.typography.h3,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '2rem',
        backgroundColor: '#e8e8e8',
        padding: theme.spacing(0.3, 1),
        marginRight: theme.spacing(0.5),
      })}
    >
      {value}
    </Box>
  );
};

TimerBlock.propTypes = {
  value: PropTypes.number.isRequired,
};

TimerBlock.defaultProps = {
  value: 0,
};

const TimerSection = ({ hasExtension, value, label }) => {
  return (
    <React.Fragment>
      <Box display={'flex'} flexDirection={'column'}>
        <Box display={'flex'}>
          <TimerBlock value={Math.floor(value / 10)} />
          <TimerBlock value={Math.floor(value % 10)} />
        </Box>
        <Typography
          align={'center'}
          sx={(theme) => ({
            fontSize: '0.6rem',
            fontWeight: theme.typography.fontWeightBold,
            marginTop: theme.spacing(0.5),
          })}
        >
          {label}
        </Typography>
      </Box>

      {hasExtension && (
        <Box
          sx={(theme) => ({
            ...theme.typography.h3,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '1.2rem',
            padding: theme.spacing(1, 0.5),
            marginRight: theme.spacing(0.5),
          })}
        >
          :
        </Box>
      )}
    </React.Fragment>
  );
};

TimerSection.propTypes = {
  hasExtension: PropTypes.bool,
  value: PropTypes.number,
  label: PropTypes.string,
};

TimerSection.defaultProps = {
  hasExtension: true,
  value: 0,
  label: '',
};

const EventDetailCard = () => {
  const translations = useTranslations();
  const [, , event] = useGlobalData();
  const intl = useIntl();

  const startDate = intl.formatDateTime(new Date(event?.startDate || new Date()), {
    month: 'long',
    day: '2-digit',
  });
  const endDate = intl.formatDateTime(new Date(event?.endDate || new Date()), {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  const startDateInfo = intl.formatDateTime(new Date(event?.startDate || new Date()), {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  // console.log(startDate, '-', endDate, '-', startDateInfo);

  const dateTime = intl.formatDateTime(new Date(), {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  });

  function duration(t0, t1) {
    let d = new Date(t1) - new Date(t0);
    const diffInSeconds = Math.abs(d) / 1000;
    const day = Math.floor(diffInSeconds / 60 / 60 / 24);
    const hour = Math.floor((diffInSeconds / 60 / 60) % 24);
    const minute = Math.floor((diffInSeconds / 60) % 60);
    const second = Math.floor(diffInSeconds % 60);
    return { day, hour, minute, second };
  }
  const [time, setTime] = React.useState(duration(dateTime, event?.startDate));
  const [trigger, setTrigger] = React.useState(false);
  useEffect(() => {
    setTime(duration(dateTime, event?.startDate));
    const timer = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 1000 * 60);
    return () => {
      clearInterval(timer);
    };
  }, [dateTime, trigger]);

  return (
    <React.Fragment>
      <Card
        sx={(theme) => ({
          borderRadius: '20px',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.07)',
          border: 'solid 0.5px #f0f0f0',
          backgroundColor: '#fff',
          padding: theme.spacing(4),
        })}
      >
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h3,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '2rem',
          })}
        >
          {event ? event.name : <Skeleton animation="wave" />}
        </Typography>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.subtitle2,
            fontSize: '0.8rem',
            color: 'text.secondary',
            margin: theme.spacing(2, 0, 0, 0),
          })}
        >
          {translations('card.event-by')}
        </Typography>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h4,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '1.2rem',
          })}
        >
          {event?.org?.name || <Skeleton animation="wave" />}
        </Typography>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.subtitle2,
            fontSize: '0.8rem',
            color: 'text.secondary',
            margin: theme.spacing(2, 0, 0, 0),
          })}
        >
          {translations('card.starting-in')}
        </Typography>
        <Box display={'flex'} mt={0.5}>
          <TimerSection label={'DAYS'} value={time.day || 0} />
          <TimerSection label={'HOURS'} value={time.hour || 0} />
          <TimerSection hasExtension={false} label={'MINUTES'} value={time.minute || 0} />
        </Box>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.subtitle2,
            fontSize: '0.8rem',
            color: 'text.secondary',
            margin: theme.spacing(2, 0, 0, 0),
          })}
        >
          {translations('card.event-time')}
        </Typography>
        <Typography
          gutterBottom
          sx={(theme) => ({
            ...theme.typography.h3,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '1rem',
          })}
        >
          {translations('card.date', {
            start: startDate,
            end: endDate,
          })}
          <br />
          {startDateInfo}
        </Typography>
        <Button
          component={Link}
          fullWidth
          href={'/login'}
          size={'large'}
          sx={(theme) => ({
            borderRadius: '12px',
            textTransform: 'none',
            marginTop: theme.spacing(1),
          })}
          variant={'contained'}
        >
          {translations('card.register-now')}
        </Button>
        <Box display={'flex'}>
          <Typography
            gutterBottom
            sx={(theme) => ({
              ...theme.typography.subtitle2,
              fontSize: '0.8rem',
              color: 'text.secondary',
              margin: theme.spacing(2, 0, 0, 0),
            })}
          >
            {translations('card.stay-updated')}
          </Typography>
          <SocialButton alt={'facebook'} icon={Facebook} url={'https://www.facebook.com/'} />
          <SocialButton alt={'linkedin'} icon={Linkedin} url={'https://www.linkedin.com/feed/'} />
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default EventDetailCard;
