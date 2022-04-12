import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Facebook from '../../assets/login/facebook.svg';
import Linkedin from '../../assets/login/linkedin.svg';

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
          {'[EVENT NAME]'}
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
          {'EventCompanyX'}
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
          <TimerSection label={'DAYS'} value={15} />
          <TimerSection label={'HOURS'} value={8} />
          <TimerSection hasExtension={false} label={'MINUTES'} value={45} />
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
          30 - 31 December 2022,
          <br />
          06:00 PM UTC+08:00
        </Typography>
        <Button
          fullWidth
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
          <Button
            color={'inherit'}
            sx={(theme) => ({
              width: theme.spacing(2.5),
              height: theme.spacing(2.5),
              minWidth: theme.spacing(0),
              padding: theme.spacing(0),
              margin: theme.spacing(2, 0, 0, 1),
            })}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'Facebook'} height={'100%'} src={Facebook} width={'100%'} />
          </Button>
          <Button
            color={'inherit'}
            sx={(theme) => ({
              width: theme.spacing(2.5),
              height: theme.spacing(2.5),
              minWidth: theme.spacing(0),
              padding: theme.spacing(0),
              margin: theme.spacing(2, 0, 0, 1),
            })}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'Linkedin'} height={'100%'} src={Linkedin} width={'100%'} />
          </Button>
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default EventDetailCard;
