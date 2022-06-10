import * as React from 'react';
import Box from '@mui/material/Box';
import ScheduleDateCard from './ScheduleDateCard';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineCard from './TimelineCard';

const ScheduleDetails = () => {
  return (
    <React.Fragment>
      <Box display={'flex'}>
        <ScheduleDateCard />
        <ScheduleDateCard />
        <ScheduleDateCard />
      </Box>
      <Box>
        <Timeline
          sx={(theme) => ({
            padding: theme.spacing(0),
          })}
        >
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={(theme) => ({
                maxWidth: '86px',
                fontSize: '1rem',
                paddingLeft: theme.spacing(0),
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.primary.main,
              })}
            >
              09:30 AM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={'primary'} />
              <TimelineConnector
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.main,
                })}
              />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={(theme) => ({
                maxWidth: '86px',
                fontSize: '1rem',
                paddingLeft: theme.spacing(0),
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.primary.main,
              })}
            >
              10:30 AM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={'primary'} />
              <TimelineConnector
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.main,
                })}
              />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard />
              <TimelineCard />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={(theme) => ({
                maxWidth: '86px',
                fontSize: '1rem',
                paddingLeft: theme.spacing(0),
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.primary.main,
              })}
            >
              11:00 AM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={'primary'} />
              <TimelineConnector
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.main,
                })}
              />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </React.Fragment>
  );
};

export default ScheduleDetails;
