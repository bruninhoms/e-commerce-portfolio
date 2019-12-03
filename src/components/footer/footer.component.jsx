import React from 'react';

import InstagramIcon from '../../assets/instagram-icon.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import WhatsAppIcon from '../../assets/whats-icon.png';


import { FooterContainer, SocialContainer } from './footer.styles.jsx';

const Footer = () => (
    <FooterContainer>
        <SocialContainer>
            <img src={InstagramIcon} alt='InstagramLogo' />
            <span>@Instagram Account</span>
        </SocialContainer>
        <SocialContainer>
            <img src={FacebookIcon} alt='FacebookLogo' />
            <span>@Facebook Account</span>
        </SocialContainer>
        <SocialContainer>
            <img src={WhatsAppIcon} alt='WhatsAppLogo' />
            <span>+55(99)9999-9999</span>
        </SocialContainer>
    </FooterContainer>
);

export default Footer;