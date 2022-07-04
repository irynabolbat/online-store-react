import CartActionType from '../types/cartTypes'

export const addItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
})

export const removeItemById = id => ({
    type: CartActionType.REMOVE_ITEM,
    payload: id
});

export const cleanCart = items => ({
    type: CartActionType.CLEAN_CART,
    payload: items
});

export const minusItem = item => ({
    type: CartActionType.MINUS_ITEM,
    payload: item
});

export const plusItem = item => ({
    type: CartActionType.PLUS_ITEM,
    payload: item
});