import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/addToCartAction";
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
					...state.productList.slice(0, state.productList.indexOf(action.payload)),
					...state.productList.slice(state.productList.indexOf(action.payload + 1)),
				],
			};
		default:
			return state;
	}
};
