import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import InfluencerSign from './pages/InfluencerSign/InfluencerSign'
import InfluencerSign2 from './pages/InfluencerSign2/InfluencerSign2'
import InfuLogin from './pages/InfluLogin/InfuLogin'
import InfuLogin2 from './pages/InfluLogin2/InfuLogin'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signUp1' element={<InfluencerSign />} />
        <Route path='/signUp2' element={<InfluencerSign2 />} />
        <Route path='/login1' element={<InfuLogin />} />
        <Route path='/login2' element={<InfuLogin2 />} />
      </Routes>
    </>
  )
}

export default App