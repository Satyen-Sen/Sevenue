import * as React from 'react';
import IMG from '../../assets/landing/temp_sponsor.png';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const SponsorsCard = () => {
  return (
    <React.Fragment>
      <Paper
        elevation={0}
        sx={(theme) => ({
          border: '1px solid',
          textAlign: '-webkit-center',
          padding: theme.spacing(4),
          position: 'relative',
          width: '100%',
        })}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="sponsor" height={'100px'} src={IMG} width={'100px'} />
        <Box
          sx={() => ({
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            width: '100%',
            opacity: 0,
            transition: '.5s ease',
            backgroundColor: '#000',
            '&:hover': {
              opacity: 1,
            },
          })}
        >
          <Box
            sx={() => ({
              transition: '.5s ease',
              opacity: 0,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%',
              height: '100%',
              '&:hover': {
                opacity: 1,
              },
            })}
          >
            <Box
              alignItems={'center'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              sx={() => ({
                color: '#fff',
                width: '100%',
                height: '100%',
              })}
            >
              <Typography
                sx={(theme) => ({
                  fontSize: '1rem',
                  fontWeight: theme.typography.fontWeightBold,
                })}
              >
                {'Service and solutions'}
              </Typography>
              <Link href={'/'} target={'_blank'}>
                <Typography
                  sx={(theme) => ({
                    fontSize: '0.8rem',
                    fontWeight: theme.typography.fontWeightBold,
                  })}
                >
                  {'View Website'}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default SponsorsCard;
