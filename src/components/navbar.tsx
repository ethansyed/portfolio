import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const clickProjects = () => {
    console.info('You clicked the projects.');
};

const clickContact = () => {
    console.info('You clicked the contact.');
};
const clickHome = () => {
    console.info('You clicked the home.');
};


export default function ButtonAppBar() {


    return (
        <ThemeProvider theme={theme}>

            <AppBar position="sticky" color="primary" sx={{
                position: 'relative',
                top: '20px',
                width: 'fit-content',
                height: 'fit-content',
                margin: 'auto',
                borderRadius: '20px'
            }}>
                <Stack direction="row" spacing={1.5} margin={'auto'} padding={'10px'}>
                    <Chip color="secondary" size="small" variant="outlined" label="Home" onClick={clickHome} />
                    <Chip size="small" label="Projects" onClick={clickProjects} />
                    <Chip size="small" label="Contact" onClick={clickContact} />
                </Stack>
            </AppBar>
        </ThemeProvider>
    );
}