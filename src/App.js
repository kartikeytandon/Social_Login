import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import InfluencerSign from './pages/InfluencerSign/InfluencerSign'
import InfluencerSign2 from './pages/InfluencerSign2/InfluencerSign2'
import InfuLogin from './pages/InfluLogin/InfuLogin'
import InfuLogin2 from './pages/InfluLogin2/InfuLogin'
import Screen1 from './pages/Screen1/Screen1'
import Screen2 from './pages/Screen2/Screen2'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signUp1' element={<InfluencerSign />} />
        <Route path='/signUp2' element={<InfluencerSign2 />} />
        <Route path='/login1' element={<InfuLogin />} />
        <Route path='/login2' element={<InfuLogin2 />} />
        <Route path='/screen1' element={<Screen1 />} />
        <Route path='/screen2' element={<Screen2 />} />
      </Routes>
    </>
  )
}

export default App