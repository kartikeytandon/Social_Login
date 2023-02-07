import React from 'react'
import MainHead from '../../components/MainHead/MainHead'
import './InfluencerSign2.css'

const InfluencerSign2 = () => {
  return (
    <div>
        <MainHead />
        <footer>
            <div>
            <p>Enter OTP</p>
            <input type="number" placeholder='Mobile Number' />
            </div>
            <small style={{ position: 'relative', left: '6.6rem', bottom: '0.7rem', color: '#3B006A' }}>Resend OTP</small>
            <div>
                <p>Create Password</p>
                <input type="text" placeholder='Password' />
            </div>
            <div>
                <button style={{ position: 'relative', left: '1.2rem' }}>Sign Up</button>
            </div>
        </footer>
    </div>
  )
}

export default InfluencerSign2