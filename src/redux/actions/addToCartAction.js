export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";
export const IMPORT_CART = "IMPORT_CART";
export const CLEAR_ALL = "CLEAR_ALL";
export const NEW_CART = "NEW_CART";
export const REMOVE_CART = "REMOVE_CART";
export const IMPORT_CARTLIST = "IMPORT_CARTLIST";
export const IMPORT_PAYMENT = "IMPORT_PAYMENT"
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
export const updateCart = (index, quantity, size) => {
	return {
		type: UPDATE_CART,
		payload: {
			index: index,
			quantity: parseInt(quantity),
			size: parseInt(size),
		},
	};
};
export const importCart = (id, productList, numberOfItems, price) => {
	return {
		type: IMPORT_CART,
		payload: {
			productList: productList,
			id: id,
			numberOfItems: numberOfItems,
			price: price,
		},
	};
};
export const importPayment = (productList) => {
    return {
        type: IMPORT_PAYMENT,
        payload: {
            productList: productList
        }
    }
}
export const newCart = () => {
	return {
		type: NEW_CART,
	};
};
export const clearAll = () => {
	return {
		type: CLEAR_ALL,
	};
};
export const removeCart = (index) => {
	return {
		type: REMOVE_CART,
		payload: index,
	};
};
export const importCartList = (cartList) => {
	return {
		type: IMPORT_CARTLIST,
		payload: cartList,
	};
};
