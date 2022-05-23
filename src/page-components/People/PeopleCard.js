import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PropTypes from 'prop-types';

const PeopleCard = ({ person }) => {
  let description = `${person?.userInfo?.jobTitle || '---'}, ${person?.userInfo?.company || '---'}`;
  const translations = useTranslations();
  const [isActive, setIsActive] = useState(false);

  return (
    <Box bgcolor={'#f4f4f6'} borderRadius={1} display={'flex'} p={2}>
      <Box py={1}>
        <Avatar sx={{ height: 50, width: 50 }}>M</Avatar>
      </Box>
      <Box display={'flex'} flexDirection={'column'} ml={2} width={'100%'}>
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
          <Box>
            <Typography
              color="default"
              sx={(theme) => ({
                ...theme.typography.h5,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '0.9rem',
              })}
            >
              {person?.firstName} {person?.lastName}
            </Typography>
            <Typography
              color={'textSecondary'}
              sx={(theme) => ({
                ...theme.typography.body1,
                fontSize: '0.8rem',
              })}
            >
              {description.length > 40 ? description.substring(0, 37) + '...' : description}
            </Typography>
          </Box>
          <Box
            onClick={() => setIsActive(!isActive)}
            sx={(theme) => ({
              border: '1px solid',
              borderColor: isActive ? theme.palette.primary.main : '#dbdbdb',
              padding: theme.spacing(0.4),
              height: '26px',
              borderRadius: 0.5,
              cursor: 'pointer',
              background: isActive ? theme.palette.primary.main : theme.palette.common.white,
            })}
          >
            <BookmarkIcon
              fontSize={'11px'}
              sx={(theme) => ({
                color: !isActive ? theme.palette.primary.main : theme.palette.common.white,
              })}
            />
          </Box>
        </Box>

        <Box alignItems={'center'} display={'flex'} mt={1} width={'100%'} zIndex={200}>
          <Button
            color={'inherit'}
            startIcon={<ChatOutlinedIcon color={'primary'} />}
            sx={(theme) => ({
              textTransform: 'capitalize',
              fontSize: '0.7rem',
              fontWeight: theme.typography.fontWeightBold,
              marginRight: theme.spacing(1),
            })}
          >
            {translations('send-message')}
          </Button>
          <Button
            color={'inherit'}
            startIcon={<CalendarMonthOutlinedIcon color={'primary'} />}
            sx={(theme) => ({
              textTransform: 'capitalize',
              fontSize: '0.7rem',
              fontWeight: theme.typography.fontWeightBold,
            })}
          >
            {translations('schedule-meeting')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

PeopleCard.propTypes = {
  person: PropTypes.object,
};

export default PeopleCard;
