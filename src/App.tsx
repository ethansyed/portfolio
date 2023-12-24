import Navbar from './components/navbar'
import './App.css'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

//MUI components
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

function App() {

  return (
    <>
      <div className="mt-0 min-w-screen min-h-screen w-full h-full bg-slate-100">
        <Navbar></Navbar>
        <div className="p-2 mt-16">
          <Grid container spacing={2}>
            <Grid item sm={8} md={8} margin={'auto'} textAlign={'center'}>
              <h1 className='text-2xl antialiased font-bold'>
                Welcome to <br /> Ethan Syed's Portfolio
              </h1>
              <Stack
                direction="row"
                spacing={1.5}
                justifyContent="center"
                alignItems="center"
                margin={1}
              >
                <ThemeProvider theme={theme}>
                  <MailIcon color='primary' fontSize='large'></MailIcon>
                </ThemeProvider>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ethansyed">
                  <GitHubIcon fontSize='large'></GitHubIcon>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethansyed/">
                  <LinkedInIcon color='primary' fontSize='large'></LinkedInIcon>
                </a>
              </Stack>
            </Grid>
            <Grid item sm={4}>
              <DemoPaper square={false}></DemoPaper>
            </Grid>
          </Grid>
        </div>
        <ThemeProvider theme={theme}>
          <div className='p-2 m-5'>
            <Grid container direction={'column'} spacing={5} justifyContent="center" alignItems={'center'} textAlign={'center'}>
              <Grid item sm={12} >
                <Typography
                  variant='h4'
                  fontWeight={'bold'}
                  color={'primary'}
                >
                  About
                  <div className='w-16 rounded bg-violet-300 h-1 m-auto '></div>
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  color={'primary'}
                >
                  This is my information
                </Typography>
              </Grid>
              <Grid item sm={12} >
                <Typography
                  variant='h4'
                  fontWeight={'bold'}
                  color={'primary'}
                >
                  Skills
                  <div className='w-16 rounded bg-violet-300 h-1 m-auto '></div>
                </Typography>

              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
      </div>

    </>
  )
}

export default App
