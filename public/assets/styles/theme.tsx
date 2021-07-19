import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#454545',
        },
        secondary: {
            main: '#4d4546',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#000000',
        },
    },
});

export default theme;