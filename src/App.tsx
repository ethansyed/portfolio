
import './App.css'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

//My Components
import Navbar from './components/navbar'
import SkillBox from './components/skillbox'

//MUI components
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

//svg imports
import reactsvg from './assets/react.svg'
import mongo from './assets/mongo.svg'
import cplusplus from './assets/c++logo.svg'
import clogo from './assets/clogo.svg'
import jslogo from './assets/js.svg'
import tslogo from './assets/ts.svg'


function App() {

  return (
    <>
      <div className="mt-0 min-w-screen min-h-screen w-full h-full bg-slate-100">
        <Navbar></Navbar>
        <div className='p-14'>
          {/* Home Section */}
          <div className="mt-14">
            <Grid container spacing={2}>
              <Grid item sm={12} md={12} margin={'auto'} textAlign={'center'}>
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
            </Grid>
          </div>

          {/* About Section */}
          <ThemeProvider theme={theme}>
            <div className='p-2 mt-16'>
              <Grid container direction={'column'} spacing={5} justifyContent="center" alignItems={'center'} textAlign={'center'}>
                {/* About */}
                <Grid item sm={12} >
                  <Typography
                    variant='h4'
                    fontWeight={'bold'}
                    color={'primary'}
                    marginTop={10}
                  >
                    About
                    <div className='w-16 rounded bg-violet-300 h-1 m-auto '></div>
                  </Typography>
                  <Typography
                    color={'primary'}
                    marginTop={10}
                    marginBottom={10}
                  >
                    Hello, my name is Ethan Syed.
                    <br />
                    I am a <b>Junior</b> at the University of Texas at Austin currently pursuing a Bachelor's in Electrical and Computer Engineering.
                    <br />
                    I specialize in Computer Architecture and Embedded Systems.
                    <br />
                    This is where I will post most of my personal projects.
                  </Typography>
                </Grid>
                {/* Skills */}
                <Grid item sm={12} >
                  <Typography
                    variant='h4'
                    fontWeight={'bold'}
                    color={'primary'}
                    marginBottom={5}
                  >
                    Skills
                    <div className='w-16 rounded bg-violet-300 h-1 m-auto '></div>
                  </Typography>
                  <Grid
                    container
                    direction={'row'}
                    justifyContent={'center'}
                    spacing={2}

                  >
                    <Grid item sm={3} md={2}>
                      <SkillBox svg={clogo} text={'C'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2}>
                      <SkillBox svg={cplusplus} text={'C++'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2}>
                      <SkillBox svg={reactsvg} text={'React'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2}>
                      <SkillBox svg={mongo} text={'MongoDB'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2}>
                      <SkillBox svg={jslogo} text={'Javascript'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2}>
                      <SkillBox svg={tslogo} text={'Typescript'}></SkillBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </ThemeProvider>
        </div>
      </div>

    </>
  )
}

export default App
