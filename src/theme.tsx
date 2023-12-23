import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#F4F4F4',
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