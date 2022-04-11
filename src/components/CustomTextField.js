import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';

const RedditTextField = styled((props) => <TextField InputProps={{ disableUnderline: true }} {...props} />)(
  ({ theme }) => ({
    '& .MuiFilledInput-root': {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }),
);

const CustomTextField = () => {
  return (
    <RedditTextField
      // defaultValue="react-reddit"
      id="reddit-input"
      label="Reddit"
      placeholder="Search Reddit"
      // style={{ marginTop: 11 }}
      variant="filled"
    />
  );
};

export default CustomTextField;
