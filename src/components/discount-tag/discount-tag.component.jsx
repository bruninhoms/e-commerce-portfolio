import React from 'react';

import {Circle, DiscountText} from './discount-tag.styles.jsx';

const DiscountTag = ({value}) => (
    <Circle>
        <DiscountText>{value}%</DiscountText>
    </Circle>
);

export default DiscountTag;