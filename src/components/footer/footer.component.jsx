import React from 'react';

import InstagramIcon from '../../assets/instagram-icon.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import WhatsAppIcon from '../../assets/whats-icon.png';


import './footer.styles.scss';

const Footer = () => (
    <div className='footer-container'>
        <div className='social-container'>
            <img src={InstagramIcon} alt='InstagramLogo' className='logo-container'/>
            <span className='social-text'>@Instagram Account</span>
        </div>
        <div className='social-container'>
            <img src={FacebookIcon} alt='FacebookLogo' className='logo-container'/>
            <span className='social-text'>@Facebook Account</span>
        </div>
        <div className='social-container'>
            <img src={WhatsAppIcon} alt='WhatsAppLogo' className='logo-container'/>
            <span className='social-text'>+55(99)9999-9999</span>
        </div>
    </div>
);

export default Footer;