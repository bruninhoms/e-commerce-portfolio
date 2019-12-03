import React from 'react';

import {
    CartItemContainer,
    Image,
    CartItemDetails,
    Name,
    Price
} from './cart-item.styles.jsx';

const CartItem = ({ item: { imageUrl, price, name, quantity, discount } }) => (
    <CartItemContainer>
        <Image src={imageUrl} alt='item'/>
        <CartItemDetails>
            <Name>{name}</Name>
            <Price>
              {quantity} x ${(price * (1-(discount/100))).toFixed(0)}
            </Price>
        </CartItemDetails>
    </CartItemContainer>
);

export default CartItem;