import CartActionType from '../types/cartTypes'
import {addItemToCart, removeItemFromCart, minusItem, plusItem } from '../utils/cartUtils'

const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionType.CLEAN_CART:
            return {
                ...state,
                cartItems: []
            }
        case CartActionType.MINUS_ITEM:
            return {
                ...state,
                cartItems: minusItem(state.cartItems, action.payload)
            }
        case CartActionType.PLUS_ITEM:
            return {
                ...state,
                cartItems: plusItem(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer