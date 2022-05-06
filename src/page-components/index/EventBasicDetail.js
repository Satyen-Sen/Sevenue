import * as React from 'react';
import IMG from '../../assets/landing/temp_logo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslations } from 'next-intl';
import QuillViewer from '../../components/QuillComponents/QuillViewer ';
import { useGlobalData } from '../../store/GlobalContext';
import Skeleton from '@mui/material/Skeleton';

const EventBasicDetail = () => {
  const translations = useTranslations();
  const [, , event] = useGlobalData();
  const [show, setShow] = React.useState(false);
  return (
    <React.Fragment>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="logo" height={'auto'} src={IMG} width={'100%'} />
      <Box
        sx={(theme) => ({
          position: 'relative',
          marginBottom: theme.spacing(6),
        })}
      >
        <Box
          sx={() => ({
            height: show ? 'auto' : '230px',
            overflow: 'hidden',
          })}
        >
          {event ? (
            <QuillViewer html={event.description} />
          ) : (
            // eslint-disable-next-line react/no-array-index-key
            new Array(12).fill(0).map((_, index) => <Skeleton animation="wave" key={`skeleton-${index}`} />)
          )}
        </Box>
        <Box
          onClick={() => setShow(!show)}
          sx={(theme) => ({
            background: show ? 'transparent' : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.69), #fff)',
            height: '100px',
            zIndex: 2,
            position: 'absolute',
            bottom: theme.spacing(-5),
            width: '100%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            flexDirection: 'column',
          })}
        >
          <Typography
            sx={(theme) => ({
              fontSize: '12px',
              color: theme.palette.text.secondary,
              lineHeight: '6px',
            })}
          >
            {show ? translations('show-less') : translations('show-more')}
          </Typography>
          <Box
            sx={(theme) => ({
              '& .MuiSvgIcon-root': {
                color: theme.palette.text.secondary,
                fontSize: '16px',
              },
            })}
          >
            {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default EventBasicDetail;
