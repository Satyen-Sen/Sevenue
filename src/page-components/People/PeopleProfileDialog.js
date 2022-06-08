import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import IMG from '../../assets/landing/temp_profile_image.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import PropTypes from 'prop-types'; 
import { shadows } from '@mui/system';
import Grid from '@mui/material/Grid'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const PeopleProfileDialog = ({ openProfile, setOpenProfile, person }) => {
  const description = `${person?.userInfo?.jobTitle || '---'}, ${person?.userInfo?.company || '---'}`;
  const handleClose = () => {setOpenProfile(false)};

  return (
    <React.Fragment>
      <Dialog maxWidth={'md'} onClose={handleClose} open={openProfile} sx={() => ({ position: 'relative', bgColor:'none' })}>

        <DialogTitle sx={() => ({ display: 'flex', justifyContent: 'end', position: 'relative',})}>
          <IconButton onClick={handleClose} sx={(theme) => ({ position: 'absolute' })}>
            <CloseIcon/>
          </IconButton>
        </DialogTitle>

        <DialogContent sx={(theme) => ({ padding: theme.spacing(4), maxWidth: '750px', height: '560px' })}>
          <Box alignItems={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={0}>

            <Avatar alt={'Profile'} src={IMG} sx={(theme) => ({height: theme.spacing(12), width: theme.spacing(12),})}/>
  
            <Typography 
              sx={(theme) => ({...theme.typography.h4, fontWeight: theme.typography.fontWeightBold, fontSize: '1.5rem', paddingTop: 1,})}
            >
              {person?.firstName} {person?.lastName}
            </Typography> 

            <Typography sx={(theme) => ({...theme.typography.subtitle1, fontSize: '1rem', color: theme.palette.text.primary,})}>
              {description.length > 40 ? description.substring(0, 37) + '...' : description}
            </Typography>

              <Stack direction="row" spacing={2} sx={(theme) => ({ cursor: 'pointer', gap: '2', padding: 1, paddingBottom:2, })}>
                <Button startIcon={<PhotoCameraFrontIcon sx={{color:'#B9394F'}}/>} variant="outlined" style={{color:'inherit', fontWeight:'400'}}
                  sx={(theme) => ({ borderColor: theme.palette.divider, textTransform: 'capitalize' })} 
                >
                  Video Call
                </Button>
                <Button startIcon={<ChatIcon sx={{color:'#B9394F'}}/>} variant="outlined" style={{color:'inherit', fontWeight:'400'}}
                  sx={(theme) => ({ borderColor: theme.palette.divider, textTransform: 'capitalize' })}
                >
                  Send Message
                </Button>
                <Button startIcon={<CalendarMonthIcon sx={{color:'#B9394F'}}/>} variant="outlined" style={{color:'inherit', fontWeight:'400'}}
                  sx={(theme) => ({ borderColor: theme.palette.divider, textTransform: 'capitalize' })}
                >
                  Schedule Meeting
                </Button>
              </Stack>

            <Box bgcolor="#F5F5F7" display={'flex'} flexDirection={'column'} mb={-1}
              sx={(theme) => ({borderRadius: 1, padding: theme.spacing(4), border: '1px solid', borderColor: theme.palette.divider,})}
            >

              <Typography sx={(theme) => ({...theme.typography.body2, fontSize: '14px', lineHeight: 1.2, mt: -1, mb: 1,})}>
                Bio Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet finibus ipsum, a
                interdum risus. Fusce in scelerisque sapien. Lorem ipsum dolor amet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Typography>


              <Typography sx={(theme) => ({ ...theme.typography.h4, fontWeight: '700', fontSize: '20px', mt: '12px', mb: '4px' })}>
                Interests
              </Typography> 

              <Box bgcolor="#FFFFFF" display={'flex'} flexDirection={'column'} borderRadius={1} sx={{ boxShadow:3}}>
                <Typography sx={(theme) => ({ ...theme.typography.body2, fontSize: '12px' })}>
                  <td>
                    <ul>
                      <li>Academy Startups</li>
                      <li>Technology Vendors</li>
                      <li>Bank/Finanzial Institutions</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Academy Startups</li>
                      <li>Technology Vendors</li>
                      <li>Bank/Finanzial Institutions</li>
                    </ul>
                  </td>
                </Typography>
              </Box>

              <Typography
                sx={(theme) => ({ ...theme.typography.h4, fontWeight: '700', fontSize: '20px', mt: '16px', mb: '4px' })}
              >
                Looking for 
              </Typography>

              <Box bgcolor="#FFFFFF" display={'flex'} flexDirection={'column'} borderRadius={1} sx={{ boxShadow:3}}>
                <Typography sx={(theme) => ({ ...theme.typography.body2, fontSize: '12px' })}>
                  <td>
                    <ul>
                      <li>Academy Startups</li>
                      <li>Technology Vendors</li>
                      <li>Bank/Finanzial Institutions</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Academy Startups</li>
                      <li>Technology Vendors</li>
                      <li>Bank/Finanzial Institutions</li>
                    </ul>
                  </td>
                </Typography>
              </Box>

              <Typography
                sx={(theme) => ({ ...theme.typography.h4, fontWeight: '700', fontSize: '20px', mt: '16px', mb: '4px' })}>
                Offering 
              </Typography>


              <Box bgcolor="#FFFFFF" display={'flex'} flexDirection={'column'} borderRadius={1} sx={{ boxShadow:3}} mb={-1}>
                <Typography sx={(theme) => ({ ...theme.typography.body2, fontSize: '12px' })}>
                  <td>
                    <ul>
                      <li>Academy Startups</li>
                      <li>Technology Vendors</li>
                      <li>Bank/Finanzial Institutions</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Academy Startups</li>
                      <li>Technology Vendors</li>
                      <li>Bank/Finanzial Institutions</li>
                    </ul>
                  </td>
                </Typography>
              </Box>


            </Box>

          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

PeopleProfileDialog.propTypes = {
  openProfile: PropTypes.bool.isRequired,
  setOpenProfile: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired,
};

export default PeopleProfileDialog;
