import Navbar from './components/navbar'
import './App.css'
import Grid from '@mui/material/Grid'

function App() {

  return (
    <>
      <div className="mt-0 min-w-screen min-h-screen w-full h-full bg-slate-200">
        <Navbar></Navbar>
        <Grid container spacing={2}>
          <Grid item md={8}></Grid>
        </Grid>
      </div>

    </>
  )
}

export default App
