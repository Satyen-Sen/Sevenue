import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import profile from '../../assets/landing/temp_profile_image.png';
import ParticipantCard from './ParticipantCard';

const TopTenParticipants = () => {
  const participants = [
    { name: 'xyz', points: 3000, avatar: profile },
    { name: 'xyz1', points: 2900, avatar: profile },
    { name: 'xyz2', points: 4500, avatar: profile },
    { name: 'xyz3', points: 3000, avatar: profile },
    { name: 'xyz9', points: 2900, avatar: profile },
    { name: 'xyz4', points: 4500, avatar: profile },
    { name: 'xyz5', points: 3000, avatar: profile },
    { name: 'xyz7', points: 2900, avatar: profile },
    { name: 'xyz8', points: 4500, avatar: profile },
  ];

  return (
    <Box
      sx={(theme) => ({
        mt: 2,
        p: 2,
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderRadius: 1,
      })}
    >
      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.2rem',
        })}
      >
        Your Current Rank
      </Typography>
      <ParticipantCard isActive={true} person={{ name: 'xyz3', points: 3000, avatar: profile }} rank={4} />

      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.2rem',
          mt: 3,
        })}
      >
        Top 10 Participants
      </Typography>
      {participants.map((each, index) => {
        return <ParticipantCard isActive={each?.name === 'xyz3'} key={each.name} person={each} rank={index + 1} />;
      })}
    </Box>
  );
};

export default TopTenParticipants;
