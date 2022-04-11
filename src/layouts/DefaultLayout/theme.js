import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#b9394f',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      secondary: '#888888',
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: '"HelveticaNeue", sans-serif',
  },
});

export default theme;
