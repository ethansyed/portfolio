
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { Link } from 'react-scroll'

//My Components
import Navbar from './components/navbar'
import SkillBox from './components/skillbox'
import ProjectCard from './components/projectcard'

//MUI components
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'

// Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'

//svg & png imports
import reactsvg from './assets/react.svg'
import mongo from './assets/mongo.svg'
import cplusplus from './assets/c++logo.svg'
import clogo from './assets/clogo.svg'
import jslogo from './assets/js.svg'
import tslogo from './assets/ts.svg'
import python from './assets/python.svg'
import recog from './assets/recog.png'
import java from './assets/java.svg'

import pdf from './assets/EthanSyedResumeHW.pdf'


function App() {

  return (
    <>
      <div className="mt-0 min-w-screen min-h-screen w-full h-full bg-slate-100">
        <Navbar></Navbar>
        <div className='p-8'>
          {/* Home Section */}
          <div id="home" className="mt-14">
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

                  <Link to="contact" spy={true} smooth={true} duration={850} offset={-50}>
                    <IconButton>
                      <MailIcon fontSize='large'></MailIcon>
                    </IconButton>
                  </Link>

                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/ethansyed">
                    <IconButton>
                      <GitHubIcon fontSize='large' sx={{ color: "black" }}></GitHubIcon>
                    </IconButton>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethansyed/">
                    <IconButton>
                      <LinkedInIcon color='primary' fontSize='large'></LinkedInIcon>
                    </IconButton>
                  </a>
                </Stack>
              </Grid>
            </Grid>
          </div>

          {/* About Section */}
          <div id='about' className='p-2 mt-16'>
            <ThemeProvider theme={theme}>
              <Grid container direction={'column'} spacing={5} justifyContent="center" alignItems={'center'} textAlign={'center'}>
                {/* About */}
                <Grid item sm={12} >
                  <h1 className='mt-16 font-bold text-3xl'>
                    About
                    <div className='w-16 rounded bg-violet-300 h-1 m-auto '></div>
                  </h1>

                  <p className='mt-20 mb-20'>
                    Hello, my name is Ethan Syed.
                    <br />
                    I am a <b>Junior</b> at the University of Texas at Austin currently pursuing a Bachelor's in Electrical and Computer Engineering.
                    <br />
                    I specialize in Computer Architecture and Embedded Systems.
                    <br />
                    This is where I will post most of my personal projects.
                  </p>

                </Grid>
                {/* Skills */}
                <Grid item sm={12} >
                  <h1 className='font-bold mb-10 text-3xl'>
                    Skills
                    <div className='w-16 rounded bg-violet-300 h-1 m-auto '></div>
                  </h1>
                  <Grid
                    container
                    direction={'row'}
                    justifyContent={'center'}
                    spacing={2}
                  >
                    <Grid item sm={3} md={2} lg={1.5}>
                      <SkillBox svg={clogo} text={'C'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2} lg={1.5}>
                      <SkillBox svg={cplusplus} text={'C++'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2} lg={1.5}>
                      <SkillBox svg={python} text={'Python'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2} lg={1.5}>
                      <SkillBox svg={java} text={'Java'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2} lg={1.5}>
                      <SkillBox svg={jslogo} text={'Javascript'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2} lg={1.5}>
                      <SkillBox svg={tslogo} text={'Typescript'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2} lg={1.5}>
                      <SkillBox svg={reactsvg} text={'React'}></SkillBox>
                    </Grid>
                    <Grid item sm={3} md={2} lg={1.5}>
                      <SkillBox svg={mongo} text={'MongoDB'}></SkillBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ThemeProvider>
          </div>
          {/* Projects Section */}
          <div id='projects' className='p-2 mt-16'>
            <ThemeProvider theme={theme}>
              <h1 className='font-bold text-3xl text-center'>
                Projects
                <div className='w-16 rounded bg-violet-300 h-1 m-auto '></div>
              </h1>
              <Stack spacing={4} marginTop={8} justifyContent={'center'} alignItems={'center'}>
                <a href="https://www.youtube.com/watch?v=uPfxQGI0XYg&t=71s">
                  <ProjectCard title={'Zombie Invaders Microcontroller Game'} tech={'ASM, C, TM4C Microcontroller'} body={[
                    'Created display firmware in ASM with custom bitmaps for uniquely designed sprites and text',
                    'Utilized C to create main game loop logic and implement ISRs to service sound and user control',
                  ]}></ProjectCard>
                </a>
                <a href="https://github.com/ethansyed/facialRecognition">
                  <ProjectCard title={'Facial Recognition'} body={
                    ['Created a script using cv2 image processing models to recognize faces from a local database',
                      'Implmented and optimized expansion of database on detection of new face to capture facial data within ~600ms']
                  } tech={'Python, CV2 Library'}></ProjectCard>
                </a>
                <a href="https://github.com/ethansyed/RESTapi">
                  <ProjectCard title={'REST API'} tech={'Javascript, Express, MongoDB'} body={[
                    'Created a RESTful API that with C.R.U.D operations to store users and user info on a MongoDB server'
                  ]}></ProjectCard>
                </a>
              </Stack>
            </ThemeProvider>
          </div>
          {/* Contact */}
          <div id='contact' className='p-2 mt-24 mb-24'>
            <h1 className='text-3xl text-center'>
              <b>Contact</b>
            </h1>
            <div className='w-16 rounded bg-violet-300 h-1 m-auto '></div>

            <div className='flex flex-col items-center text-xl mr-8'>
              <div className='flex mt-10 items-center gap-2'>
                <a href={pdf} target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <DocumentScannerIcon></DocumentScannerIcon>
                  </IconButton>
                </a>
                <h1>Resume</h1>
              </div>

              <div className='flex mt-4 items-center gap-2'>
                <IconButton>
                  <MailIcon></MailIcon>
                </IconButton>
                <h1>ethansyed@gmail.com</h1>
              </div>

            </div>

          </div>

        </div>
        {/* Footer */}
        <div className='flex justify-center align-center w-full bg-black h-36 text-md antialiased text-center' style={{ backgroundColor: '#252525' }}>
          <h1 className='my-auto' style={{ color: '#FAFAFA' }}> <b>Ethan Syed</b>  <br /> All Rights Reserved</h1>
        </div>
      </div>

    </>
  )
}

export default App
