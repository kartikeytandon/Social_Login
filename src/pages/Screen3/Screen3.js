import React from 'react'
import './Screen3.css'
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsCameraReels } from 'react-icons/bs';
import { BiStoreAlt } from 'react-icons/bi';

const Screen3 = () => {
  return (
    <>
        <nav>
            <div className="topContent">
                <div className="socials">
                    <div className="socialItem">
                        <BsInstagram className='icons' />
                        <span>32.k</span>
                    </div>
                    <div className="socialItem">
                        <AiOutlineYoutube className='icons' />
                        <span>1M</span>
                    </div>
                </div>
                <div className="rightBar">
                    <FiSettings className='icons' />
                </div>
            </div>
            <div className="profile">
                <div className="dp">
                    <div className="img"></div>
                    <span>Depanshu</span>
                </div>
                <div className="follow">
                    <span>330 Followers</span>
                    <button>Follow</button>
                </div>
            </div>
        </nav>
        <div className="catBtns">
            <button>
                <span>Looks</span>
                <BsCameraReels />
            </button>
            <button>
                <span>Store</span>
                <BiStoreAlt />
            </button>
        </div>

        <div className="reelsSection">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4WGCiL5oxSh7MfQQnT7oroS-wHwhXl9opW1G5wSepjei5SVOzW2TMYftU9nTALmQWGA&usqp=CAU" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4WGCiL5oxSh7MfQQnT7oroS-wHwhXl9opW1G5wSepjei5SVOzW2TMYftU9nTALmQWGA&usqp=CAU" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4WGCiL5oxSh7MfQQnT7oroS-wHwhXl9opW1G5wSepjei5SVOzW2TMYftU9nTALmQWGA&usqp=CAU" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4WGCiL5oxSh7MfQQnT7oroS-wHwhXl9opW1G5wSepjei5SVOzW2TMYftU9nTALmQWGA&usqp=CAU" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4WGCiL5oxSh7MfQQnT7oroS-wHwhXl9opW1G5wSepjei5SVOzW2TMYftU9nTALmQWGA&usqp=CAU" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4WGCiL5oxSh7MfQQnT7oroS-wHwhXl9opW1G5wSepjei5SVOzW2TMYftU9nTALmQWGA&usqp=CAU" alt="" />
        </div>
    </>
  )
}

export default Screen3