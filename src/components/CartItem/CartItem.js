import React, { useState } from "react";
import { connect } from 'react-redux';
import './CartItem.css'         
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

export const CartItem = ({id, item, title, image, price, removeItem, onMinus, onPlus}) => {  

    const removeItemNotification = () => {
        removeItem(id)
        Store.addNotification({
            title: "The product has been successfully removed from the cart!",
            type: 'success',
            container: 'top-center',
            insert: 'bottom',
            animationIn: 'zoon-in',
            animationOut: 'zoom-out',
            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 350
        })
    }

    let {quantity} = item

    return(      
        <div className="cart-wrapper cart-row" id={id} key={`cartItem-${id}`}>
            <img src={image} alt="Laptop" className="cart-product cart-col-1" />
                <h5 className="cart-product-name cart-col-5">
                    {title}
                </h5>

                <div className="cart-minus cart-col-1"
                    onClick={(quantity === 0) ? ("disabled={true}") : (() => onMinus(item))}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </div>
                
                <div className="cart-count cart-col-1">{quantity}</div>

                <div className="cart-plus cart-col-1" onClick={() => onPlus(item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>

                <div className="cart-product-prise cart-col-2">{price * quantity} грн</div>
                <div className="delete-from-cart cart-col-1" onClick={removeItemNotification}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
        </div>
    )
}
