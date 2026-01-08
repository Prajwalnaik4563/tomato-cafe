import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>“Dining at Tomato will be a delightful experience from start to finish. 
                    The food are exceptional, the staff attentive, and the ambiance are
                     perfect for a cozy evening. Highly recommended!” “To enjoy everything ,visit to Tomato</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon}alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>HOME</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>7878787878</li>
                    <li>foodat@tomato.com</li>
                    <li>Owner-Prajwal Naik</li>
                    <li>Delivery boys-Suraj Y,Swagat P,kumar</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 @Tomato.com-All Right Reserved.
        </p>

    </div>
  )
}

export default Footer