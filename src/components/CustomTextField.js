import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const RedditTextField = styled((props) => <TextField InputProps={{ disableUnderline: true }} {...props} />)(
  ({ theme }) => ({
    '& .MuiInputBase-root': {
      '&:before': {
        borderBottom: 'none',
      },
      '&:after': {
        borderBottom: 'none',
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: `none`,
      },
    },
    '& .MuiFilledInput-root': {
      border: '1px solid',
      borderColor: theme.palette.divider,
      overflow: 'hidden',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.common.white,
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        borderColor: theme.palette.primary.main,
      },
    },
  }),
);

const CustomTextField = (textFieldProps) => {
  return (
    <RedditTextField
      InputLabelProps={{
        shrink: true,
      }}
      {...textFieldProps}
    />
  );
};

export default CustomTextField;
