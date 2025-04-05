import {ColorModeContext,useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import TopBar from './scenes/global/TopBar'
import LandingPage from './components/landing_page/LandingPage'
import DashboardIndex from './scenes/DashboardIndex'
// import SideBar from './scenes/global/SideBar'
// import Team from './scenes/Team'
// import Contacts from './scenes/Contacts'
// import Invoices from './scenes/Invoices'
// import Form from './scenes/Form'
// import Calendar from './scenes/Calendar'
// import FAQ from './scenes/FAQ'
// import Bar from './scenes/bar'
// import Line from './scenes/Line'
// import Fag from './scenes/Fag'

function App() {
  const [theme, colorMode] = useMode()
  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
              <main className='content'>
                {/* <TopBar/> */}
                <Routes>

                  <Route path="/" element={<LandingPage/>}></Route>
                </Routes>
              </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App