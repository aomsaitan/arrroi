import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_CART,
} from "../actions/addToCartAction";
const initialState = {
	productList: [],
};

export const addToCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				productList: [...state.productList, action.payload],
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				productList: [
					...state.productList.slice(0, action.payload),
					...state.productList.slice(action.payload + 1),
				],
			};
		case UPDATE_CART:
			return {
				...state
			};
		default:
			return state;
	}
};
