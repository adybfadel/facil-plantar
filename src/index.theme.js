import { createMuiTheme } from '@material-ui/core';

import { 
  green,
  blue,
  amber,
  grey,
} from "@material-ui/core/colors";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  constraints: {
    maxWidth: 880,
  },
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: '#fff',
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#fff',
    },
    accent: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
      contrastText: '#fff',
    },
    border: {
      light: grey[300],
      main: grey[400],
      dark: grey[500],
      contrastText: '#fff',
    },
  },
});