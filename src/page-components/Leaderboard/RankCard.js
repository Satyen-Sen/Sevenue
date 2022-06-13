import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';

const ActionPoints = () => {
  

  const table = [
    {_id: 1, action: 'Attending Conference Session', point: '200/session',},
    {_id: 2, action: 'Visiting an Exhibitor', point: '100/exhibitor',},
    {_id: 3, action: 'Registering Your Interest with Exhibitor', point: '50/registeration',},
    {_id: 4, action: 'Adding Files to Briefcase', point: '10/file',},
    {_id: 5, action: 'Chatting with an Exhibitor', point: '50/chat',},
    {_id: 6, action: 'Joining Networking Table', point: '100/entry',},
    {_id: 7, action: 'Scheduling a Meeting', point: '50/meeting',},
    {_id: 8, action: 'Sharing a Business Card', point: '50/share',},
    {_id: 9, action: 'Adding a Business Card to your Briefcase', point: '50/card',},
    {_id: 10, action: 'Joining a Meeting', point: '100/meeting',},
  ];

  return (
    <React.Fragment>


      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 0,
          mt: 2,
          borderRadius: '0 0 5px 5px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        }}
      >
        <Box sx={(theme) => ({ height: '50px', backgroundColor: '#F6A328' })}>
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '1.5rem',
              alignItems: 'center',
              color: 'background.paper',
              display: 'flex',
              justifyContent: 'center',
              m: 1,
            })}
          >
            1ˢᵗ Prize
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            height: '200',
            backgroundColor: '#B8244F',
            display: 'flex',
            flexDirection: 'row',
          })}
        >
          <Grid item sx={(theme) => ({ m: 2 })} xs={5}>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1rem',
                alignItems: 'center',
                color: 'background.paper',
                display: 'flex',
                justifyContent: 'right',
                mb: 1,
              })}
            >
              RM500
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                color: 'background.paper',
                display: 'flex',
                justifyContent: 'right',
              })}
            >
              CASH
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                color: 'background.paper',
                display: 'flex',
                justifyContent: 'right',
              })}
            >
              PRIZES
            </Typography>
          </Grid>

          <Grid item xs={2}></Grid>

          <Grid item sx={(theme) => ({ m: 2 })} xs={4.5}>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1rem',
                alignItems: 'center',
                color: 'background.paper',
                display: 'flex',
                justifyContent: 'left',
                mb: 1,
              })}
            >
              RM5000
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                color: 'background.paper',
                display: 'flex',
                justifyContent: 'left',
              })}
            >
              VOUCHERS
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                color: 'background.paper',
                display: 'flex',
                justifyContent: 'left',
              })}
            >
              WORTHS
            </Typography>
          </Grid>
        </Box>
      </Card>

      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 0,
          mt: 2,
          borderRadius: '0 0 5px 5px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        }}
      >
        <Box sx={(theme) => ({ height: '50px', backgroundColor: '#F6A328' })}>
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '1.5rem',
              alignItems: 'center',
              color: 'background.paper',
              display: 'flex',
              justifyContent: 'center',
              m: 1,
            })}
          >
            2ⁿᵈ Prize
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            height: '200',
            backgroundColor: '#F8E9EE',
            display: 'flex',
            flexDirection: 'row',
          })}
        >
          <Grid item sx={(theme) => ({ m: 2 })} xs={5}>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'right',
                mb: 1,
              })}
            >
              RM500
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'right',
              })}
            >
              CASH
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'right',
              })}
            >
              PRIZES
            </Typography>
          </Grid>

          <Grid item xs={2}></Grid>

          <Grid item sx={(theme) => ({ m: 2 })} xs={4.5}>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'left',
                mb: 1,
              })}
            >
              RM5000
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'left',
              })}
            >
              VOUCHERS
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'left',
              })}
            >
              WORTHS
            </Typography>
          </Grid>
        </Box>
      </Card>

      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 0,
          mt: 2,
          borderRadius: '0 0 5px 5px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        }}
      >
        <Box sx={(theme) => ({ height: '50px', backgroundColor: '#F6A328' })}>
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '1.5rem',
              alignItems: 'center',
              color: 'background.paper',
              display: 'flex',
              justifyContent: 'center',
              m: 1,
            })}
          >
            3ʳᵈ Prize
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            height: '200',
            backgroundColor: '#F8E9EE',
            display: 'flex',
            flexDirection: 'row',
          })}
        >
          <Grid item sx={(theme) => ({ m: 2 })} xs={5}>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'right',
                mb: 1,
              })}
            >
              RM500
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'right',
              })}
            >
              CASH
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'right',
              })}
            >
              PRIZES
            </Typography>
          </Grid>

          <Grid item xs={2}></Grid>

          <Grid item sx={(theme) => ({ m: 2 })} xs={4.5}>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'left',
                mb: 1,
              })}
            >
              RM5000
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'left',
              })}
            >
              VOUCHERS
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: '0.8rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'left',
              })}
            >
              WORTHS
            </Typography>
          </Grid>
        </Box>
      </Card>

      <Card sx={(theme) => ({mt: 2, boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.16)',})}>
        <Grid container spacing={2}>
          <Grid item sx={(theme) => ({ backgroundColor: '#504E4E' })} xs={8}>
            <Typography sx={(theme) => ({fontWeight: theme.typography.fontWeightBold, color:theme.palette.common.white, fontSize: '1.2rem', alignItems: 'center', display: 'flex', justifyContent: 'left', m: 3, ml: 4,})}>
              Action
            </Typography>     
          </Grid>

          <Grid item sx={(theme) => ({ backgroundColor: '#B8244F' })} xs={4}>
            <Typography sx={(theme) => ({fontWeight: theme.typography.fontWeightBold, color:theme.palette.common.white, fontSize: '1.2rem', alignItems: 'center', display: 'flex', justifyContent: 'left', m: 3, ml: 4,})}>
              Points
            </Typography>     
          </Grid>
        </Grid>

        <Table>
          <TableBody>
            {
              table.map( (data) => (
                <TableRow>
                  <TableCell xs={8} sx={(theme) => ({borderRight:0.5, borderBottom:0.5, borderColor:theme.palette.divider,})}>
                    <Typography sx={(theme) => ({fontWeight: theme.typography.fontWeightBold, fontSize: '0.9rem', alignItems: 'center', display: 'flex', justifyContent: 'left', m:0.5, ml:2,})}>
                      {data.action} 
                    </Typography>
                  </TableCell>
                    <Divider/>
                  <TableCell xs={4} sx={(theme) => ({borderBottom:0.5, borderColor:theme.palette.divider,})}>
                    <Typography sx={(theme) => ({fontWeight: theme.typography.fontWeightBold, color:theme.palette.info.main, fontSize: '0.9rem', alignItems: 'center', display: 'flex', justifyContent: 'left', m:0.5, ml:2,})}>
                      {data.point}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
          
    </React.Fragment>
  );
};

export default ActionPoints;
