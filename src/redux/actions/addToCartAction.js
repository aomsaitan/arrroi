export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";
export const IMPORT_CART = "IMPORT_CART"
export const addToCart = (item) => {
	return {
		type: ADD_TO_CART,
		payload: item,
	};
};
export const removeFromCart = (index) => {
	return {
		type: REMOVE_FROM_CART,
		payload: index,
	};
};
export const updateCart = (i,quantity) => {
    return {
        type: UPDATE_CART,
        payload: quantity,
        index: i
    }
}
export const importCart = (productList) => {
    return {
        type: IMPORT_CART,
        payload: productList
    }
}
