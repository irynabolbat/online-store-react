import React from "react";
import { connect } from 'react-redux'
import './Cart.css'
import { CartItem } from "../CartItem/CartItem";
import { removeItemById, cleanCart, minusItem, plusItem} from '../../redux/actions/cartAction'; 
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

const Cart = ({active, setActive, cartItems, totalPrice, removeItem, removeAllItems, onMinusItem, onPlusItem}) => {

    const orderNotification = () => {
        Store.addNotification({
            title: "Your order has been successfully completed!",
            message: 'Thank you for your order!',
            type: 'success',
            container: 'top-center',
            insert: 'bottom',
            animationIn: 'zoon-in',
            animationOut: 'zoom-out',
            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 300
        })
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(true)}>
            <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                
                <div className=" close-icon" onClick={() => setActive(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>

                <div className="clean-cart" onClick={() => removeAllItems(cartItems)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart clean-cart-icon" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    Clean the cart
                </div>

                <div>
                    {
                        cartItems.map(cartItem => <CartItem 
                                                    id={cartItem.id} 
                                                    item={cartItem} 
                                                    title={cartItem.title} 
                                                    image={cartItem.images[0]} 
                                                    price={cartItem.price} 
                                                    removeItem={removeItem}
                                                    onMinus={onMinusItem}
                                                    onPlus={onPlusItem}
                                                />)
                    }
                </div>

                <div className="cart-total_price">
                    Total: {totalPrice} грн 
                </div>

                <div className="cart-btn-order">
                    <button className="btn_order" onClick={totalPrice === 0 ? isDisabled : orderNotification}>ORDER</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems: cartItems,
    totalPrice: cartItems.reduce((sum, item) => sum += item.price * item.quantity, 0),
})

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItemById(id)),
    removeAllItems: cartItems => dispatch(cleanCart(cartItems)),
    onMinusItem: item => dispatch(minusItem(item)),
    onPlusItem: item => dispatch(plusItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)