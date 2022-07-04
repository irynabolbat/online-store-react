export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    
    if (existingCartItem) {
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, id) => cartItems.filter(item => item.id !== id);

export const minusItem = (cartItems, quantityRemove) => {
    return cartItems.map(cartItem => 
        cartItem.id === quantityRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}

export const plusItem = (cartItems, quantityAdd) => {
    return cartItems.map(cartItem => 
        cartItem.id === quantityAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
}

