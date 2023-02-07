import React from 'react'
import { Link } from 'react-router-dom'
import MainHead from '../../components/MainHead/MainHead'
import './InfuLogin.css'

const InfuLogin = () => {
  return (
    <div>
        <header>
            <h1>Influencer <br /> Login</h1>
        </header>
        <div className="info">
                <li>Mobile Number</li>
                <li style={{ color: '#3B006A', fontWeight: '600' }}>+91 3812048203</li>
                <li style={{ color: '#3F2B96' }}>Change?</li>
        </div>
        <footer>
            <div>
            <p>Enter Password</p>
            <input type="text" placeholder='Password' />
            </div>
            <div>
                <button style={{ position: 'relative', left: '1.2rem' }}>Login</button>
                <p style={{ textAlign: 'center', position: 'relative', left: '1rem' }}>or</p>
                <p style={{ textAlign: 'center', position: 'relative', left: '1rem', color: '#3B006A' }}>
                    <Link to='/login1' style={{ textDecoration: 'none' }}>
                        Login Using OTP
                    </Link>
                </p>
            </div>
        </footer>
    </div>
  )
}

export default InfuLogin