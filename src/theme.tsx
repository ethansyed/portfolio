import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#252525',
        },
        secondary: {
            main: '#AC82FF',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    },
});