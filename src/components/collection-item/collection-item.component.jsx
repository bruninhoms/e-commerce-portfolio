import React from 'react';
import { connect } from 'react-redux';
import { store } from 'react-notifications-component';

import CustomButton from '../custom-button/custom-button.component.jsx';
import personalizedNotification from '../notifications/notifications.component.jsx';
import DiscountTag from '../discount-tag/discount-tag.component.jsx';

import { addItem } from '../../redux/cart/cart.actions.js';

import './collection-item.styles.scss';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl, discount } = item;
    
    return (
        <div className='collection-item'>
            <div
                className ='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            {discount > 0 ? (<DiscountTag value={discount} /> ): null}
            <div className ='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>${ price }</span>
            </div>
            <CustomButton 
                onClick={() => 
                    {
                        addItem(item);
                        store.addNotification({
                            content: personalizedNotification('Sucess !', 'Added to cart', 'sucess'),
                            container: 'bottom-left',
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                              duration: 1000,
                            }
                          })
                    }
                } 
                inverted>
                    ADD TO CART 
            </CustomButton>
        </div>
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);