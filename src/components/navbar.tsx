import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-scroll'


export default function navbar() {


    return (
        <ThemeProvider theme={theme}>

            <AppBar position="sticky" sx={{
                top: '20px',
                width: 'fit-content',
                height: 'fit-content',
                margin: 'auto',
                borderRadius: '20px',
                backgroundColor: '#FAFAFA'
            }}>
                <Stack direction="row" spacing={1.5} margin={'auto'} padding={'10px'}>
                    <Link to="home" spy={true} smooth={true} duration={500} offset={-100}>
                        <Button startIcon={<HomeIcon />} color="secondary" sx={{ borderRadius: 20, textTransform: 'none' }}>Home</Button>
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={500} offset={-50}>
                        <Button startIcon={<InfoIcon />} color="secondary" sx={{ borderRadius: 20, textTransform: 'none' }}>About</Button>
                    </Link>
                    <Link to="projects" spy={true} smooth={true} duration={500} offset={-100}>
                        <Button startIcon={<FolderIcon />} color="secondary" sx={{ borderRadius: 20, textTransform: 'none' }}>Projects</Button>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} offset={-50}>
                        <Button startIcon={<PermContactCalendarIcon />} color="secondary" sx={{ borderRadius: 20, textTransform: 'none' }}>Contact</Button>
                    </Link>
                </Stack>
            </AppBar>
        </ThemeProvider>
    );
}