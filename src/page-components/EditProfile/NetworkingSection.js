import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useGlobalData } from '../../store/GlobalContext';
import { UsersService } from '../../apis/rest.app';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSnackbar } from 'notistack';

const NetworkingSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useGlobalData();
  const [userData] = useUserOnBoardingData();
  const translations = useTranslations('networking');

  const [isActive, setIsActive] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSave = async () => {
    setLoading(true);
    await UsersService.patch(user._id, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    })
      .then((res) => {
        setUser({
          ...res,
        });
        setLoading(false);
        enqueueSnackbar('Updated Successfully', { variant: 'success' });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={3} sm={6} xs={6}>
          <Typography
            sx={(theme) => ({
              ...theme.typography.body2,
              fontSize: '1rem',
            })}
          >
            {translations('meeting')}
          </Typography>
        </Grid>
        <Grid item md={9} sm={6} xs={6}>
          <ButtonGroup disableElevation variant="contained">
            <Button
              color={isActive ? 'primary' : 'inherit'}
              onClick={() => setIsActive(true)}
              sx={{ borderRight: 'transparent' }}
              variant={isActive ? 'contained' : 'outlined'}
            >
              {translations('on')}
            </Button>
            <Button
              color={!isActive ? 'primary' : 'inherit'}
              onClick={() => setIsActive(false)}
              sx={{ borderLeft: 'transparent' }}
              variant={!isActive ? 'contained' : 'outlined'}
            >
              {translations('off')}
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Box sx={{ py: 4 }}>
        <LoadingButton
          fullWidth
          loading={loading}
          onClick={handleSave}
          sx={(theme) => ({
            padding: theme.spacing(1, 4),
            maxWidth: theme.spacing(16),
            textTransform: 'none',
          })}
          variant={'contained'}
        >
          {translations('save')}
        </LoadingButton>
        <Box sx={{ flex: '1 1 auto' }} />
      </Box>
    </React.Fragment>
  );
};

export default NetworkingSection;
