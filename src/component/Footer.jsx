import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__box">
        <div className="footer__box__left">
          <div className="footer__box__left__categories">
            <p>Categories</p>
            <div>
              <p>Sports</p>
            </div>
            <div>
              <p>Business</p>
            </div>
            <div>
              <p>Technology</p>
            </div>
          </div>
          <div className="footer__box__left__contactUs">
            <div className="footer__box__left__contact">
              <p>Contact Us</p>
              <div>Phone No. - <span>6393764098</span></div>
              <div>Email - <span>subhji75088@gmail.com</span></div>
              <div>Address - <span>Noida Sector 59 Delhi NCR</span></div>
            </div>
            <div className="footer__box__left__contactUs__icon">
              <FaFacebook className='icon'/>
              <FaInstagramSquare className='icon'/>
             < FaYoutube className='icon'/>
            </div>
          </div>
        </div>
        <div className="footer__box__right">
          <div className="footer__box__right__newsletter">
            <p>Subscribe to Our Newsletter</p>
            <div className="footer__box__right__newslette__email">
              <input type="email" placeholder="Enter Your Email Here" className='footer__box__right__newslette__email__input' />
              <button className='footer__box__right__newslette__email__button'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyrights">
      &copy;  2023 Copyrights   Coders Subhash Kumar
      </div>
    </div>
  )
}

export default Footer
