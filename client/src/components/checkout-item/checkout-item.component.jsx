import React from 'react';
import { connect } from 'react-redux';
import { store } from 'react-notifications-component';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions.js';
import personalizedNotification from '../notifications/notifications.component.jsx';

import {
    CheckoutItemContainer,
    ImageContainer,
    Quantity,
    TextContainer,
    RemoveButton
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, price, quantity, imageUrl, discount } = cartItem;
    const priceDiscount = (100 - discount)/100 * price;

    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <Quantity className='quantity'>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </Quantity>
        <TextContainer>${(priceDiscount).toFixed(0)}</TextContainer>
        <RemoveButton onClick={() => {
            clearItem(cartItem);
            store.addNotification({
                content: personalizedNotification('Removed !', 'Removed from cart ', 'error'),
                container: 'bottom-left',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 1000,
                }
              });
            }}>
                &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);