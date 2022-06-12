import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const RankCard = () => {
  const table = [
    {
      _id: 1,
      action: 'Attending Conference Session',
      point: '200/session',
    },
    {
      _id: 2,
      action: 'Visiting an Exhibitor',
      point: '100/session',
    },
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

      <Card sx={(theme) => ({ mt: 2 })}>
        <Box>
          <Grid container spacing={2}>
            <Grid item sx={(theme) => ({ backgroundColor: '#504E4E' })} xs={7}>
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: 'background.paper',
                  fontSize: '1.2rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 3,
                  ml: 4,
                })}
              >
                Action
              </Typography>
            </Grid>

            <Grid item sx={(theme) => ({ backgroundColor: '#B8244F' })} xs={5}>
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: 'background.paper',
                  fontSize: '1.2rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 3,
                  ml: 8,
                })}
              >
                Points
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  mt: 0,
                  ml: 4,
                })}
              >
                Attending Conference Session
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  mt: 0,
                  ml: 8,
                })}
              >
                200/session
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Visiting an Exhibitor
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                100/exhibitor
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Registering Your Interest with Exhibitor
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                50/registeration
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Adding Files to Briefcase
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                10/file
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Chatting with an Exhibitor
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                50/chat
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Joining Network Table
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                100/entry
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Scheduling a Meeting
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                50/meeting
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Sharing a Business Card
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                50/share
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Adding a Business Card to your Briefcase
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                50/card
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderRight: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={7}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 4,
                  mt: 0,
                })}
              >
                Joining a Meeting
              </Typography>
            </Grid>

            <Grid
              item
              sx={(theme) => ({
                borderBottom: 1,
                borderBottLeft: 1,
                borderColor: '#E2E2E2',
                mt: 2,
              })}
              xs={5}
            >
              <Typography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  color: '#5581E9',
                  fontSize: '0.9rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'left',
                  m: 2,
                  ml: 8,
                  mt: 0,
                })}
              >
                100/meeting
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default RankCard;
