import React from 'react'
import './Screen1.css'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsSnapchat } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import Domain from './Domain';

const Screen1 = () => {
  return (
    <section>
        <h4 style={{ textAlign: 'center', marginTop: '1rem', color: '#3B006A' }}>Social Media Details</h4>
        <h4 style={{ marginLeft: '1.6rem', marginTop: '2rem', color: '#3B006A' }}>Connect Social Media</h4>
        <div className='socialIcons'>
            <BsInstagram id='socialIcons' />
            <BsFacebook id='socialIcons' />
            <AiFillYoutube id='socialIcons' />
            <BsWhatsapp id='socialIcons' />
        </div>
        <div className='socialIcons'>
            <FaDiscord id='socialIcons' />
            <AiFillTwitterCircle id='socialIcons' />
            <BsSnapchat id='socialIcons' />
            <BsTelegram id='socialIcons' />
        </div>

        <div className="inputCrud" style={{ marginLeft: '1.6rem', padding: '1rem 0 0 0' }}>
            <p style={{ fontWeight: 'bold' }}>Social Media Details</p>
            <input type="text" placeholder='username' />
        </div>

        <h4 style={{ marginLeft: '1.6rem', position:'relative', top: '2rem' }}>Select a Domain</h4>
        <article>
            <Domain />
            <Domain />
            <Domain />
            <Domain />
            <Domain />
            <Domain />
        </article>
    </section>
  )
}

export default Screen1