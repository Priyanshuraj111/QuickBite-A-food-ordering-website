import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        {/* Left Section: Logo and About */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="QuickBite Logo" className="footer-logo" />
          <p className="footer-description">
            QuickBite is your one-stop destination for fresh, delicious meals delivered straight to your door.
            Discover a wide variety of cuisines, crafted with care and delivered with love, to satisfy your cravings anytime, anywhere.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section: Links */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section: Contact */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>9572146221</li>
            <li>contact@quickbite.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 © quickbite.com - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
