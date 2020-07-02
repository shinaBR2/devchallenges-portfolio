import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5C94E1'
    },
    secondary: {
      main: '#ffc400'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  shape: {
    borderRadius: 12
  },
  typography: {
    fontFamily: "'Montserrat', 'sans-serif'"
  }
});

export default theme;
