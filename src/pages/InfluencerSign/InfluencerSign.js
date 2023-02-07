import React from 'react'
import { Link } from 'react-router-dom'
import MainHead from '../../components/MainHead/MainHead'
import './InfluencerSign.css'

const InfluencerSign = () => {
  return (
    <div>
      <MainHead />
      <footer>
        <p>MobilNumber</p>
        <input type="number" placeholder='Mobile Number' />
        <div>
          <button>
            <Link to='/signUp2' style={{ color: 'white', textDecoration: 'none' }}>Send OTP</Link>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default InfluencerSign