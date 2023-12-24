import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';


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
                    <Button startIcon={<HomeIcon />} color="secondary" sx={{ borderRadius: 20, textTransform: 'none' }}>Home</Button>
                    <Button startIcon={<InfoIcon />} color="secondary" sx={{ borderRadius: 20, textTransform: 'none' }}>About</Button>
                    <Button startIcon={<FolderIcon />} color="secondary" sx={{ borderRadius: 20, textTransform: 'none' }}>Projects</Button>
                    <Button startIcon={<PermContactCalendarIcon />} color="secondary" sx={{ borderRadius: 20, textTransform: 'none' }}>Contact</Button>
                </Stack>
            </AppBar>
        </ThemeProvider>
    );
}