import React from 'react'
import MainHead from '../../components/MainHead/MainHead'
import './Screen2.css'

const Screen2 = () => {
  return (
    <div>
        <MainHead />
        <p style={{ fontWeight: 'bold', color: '#3B006A', paddingLeft: '1.6rem', paddingTop: '1rem' }}>Enter your Personal Details</p>
        <form action="">
            <div>
                <label htmlFor="">Display Name</label>
                <input type="text" placeholder='Display Name' />
            </div>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Username' />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Email' />
            </div>
            <div style={{ flexDirection: 'row', gap: '1rem' }}>
                <label style={{ border: '1px solid gray', padding: '0.4rem 1rem', fontWeight: '500' }} htmlFor="">Male</label>
                <label style={{ border: '1px solid gray', padding: '0.4rem 1rem', fontWeight: '500' }} htmlFor="">Female</label>
            </div>
            <button style={{ backgroundColor: '#3B006A', padding: '0.4rem 1rem', width: '6rem', position: 'relative', left: '10.8rem', top: '1rem' }}>Next Step</button>
        </form>
    </div>
  )
}

export default Screen2