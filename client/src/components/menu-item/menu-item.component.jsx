import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    Content
} from './menu-item.styles.jsx';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
        <MenuItemContainer 
            size={size}
            onClick = { () => history.push(`${match.url}${linkUrl}`) }
        >
            <BackgroundImageContainer
                className='background-image'
                imageUrl={imageUrl}
            />
            <Content className='content'>
                <h1>{ title.toUpperCase() }</h1>
                <span>SHOP NOW</span>
            </Content>
        </MenuItemContainer>
);

export default withRouter(MenuItem);