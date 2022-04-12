import * as React from 'react';
import IMG from '../../assets/landing/temp_logo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslations } from 'next-intl';

const EventBasicDescription = () => {
  const translations = useTranslations();
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
          <Typography
            sx={(theme) => ({
              marginTop: theme.spacing(2),
              color: theme.palette.text.secondary,
            })}
          >
            Ten years ago Red Kite Community Housing was set up with the aim of providing homes tenants feel proud of,
            excellent customer service and to realise the potential in our communities.
          </Typography>
          <Typography
            sx={(theme) => ({
              marginTop: theme.spacing(2),
              color: theme.palette.text.secondary,
            })}
          >
            Ten years ago Red Kite Community Housing was set up with the aim of providing homes tenants feel proud of,
            excellent customer service and to realise the potential in our communities. Since then Red Kite has
            flourished and grown, overcoming challenges while focusing on a positive future. Success has been achieved
            by being innovative and working together with tenants, staff, board members and community partners to
            respond to people’s needs and help build thriving communities. Our journey proves that together we can
            accomplish so much.
          </Typography>
          <Typography
            sx={(theme) => ({
              marginTop: theme.spacing(2),
              color: theme.palette.text.secondary,
            })}
          >
            Ten years ago Red Kite Community Housing was set up with the aim of providing homes tenants feel proud of,
            excellent customer service and to realise the potential in our communities. Since then Red Kite has
            flourished and grown, overcoming challenges while focusing on a positive future. Success has been achieved
            by being innovative and working together with tenants, staff, board members and community partners to
            respond to people’s needs and help build thriving communities. Our journey proves that together we can
            accomplish so much.
          </Typography>
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

export default EventBasicDescription;
