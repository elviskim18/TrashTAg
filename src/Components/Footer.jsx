import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoFacebook} from 'react-icons/io';



function Footer() {
  return (
    <div className='footer'>
        <FaInstagram className="social"/>
        <FaTwitter className="social"/>
        <IoLogoFacebook className="social"/>
    </div>
  )
}

export default Footer