import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './info.styles.scss';

const InfoPage = () => (
    <div className='info-container'>
        <Link to="/" className='logo'>
            <Logo />
        </Link>
        <div className='text'>
            <span className='little-text'>
                Our collections are made with the best material imported from Brazil
                <br />
                Come with us and join this greater future
                <br />
                <br />
                <Link to="/shop" className='check-collections'>
                &#8680; CHECK OUR COLLECTIONS OUT &#8678;
                </Link>
            </span>
        </div>
    </div>
);

export default InfoPage;