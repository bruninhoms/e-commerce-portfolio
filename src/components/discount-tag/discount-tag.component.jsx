import React from 'react';

import './discount-tag.styles.scss';

const DiscountTag = ({value}) => (
    <div  className='circle'>
        <div className='discount-style'>{value}%</div>
    </div>
);

export default DiscountTag;