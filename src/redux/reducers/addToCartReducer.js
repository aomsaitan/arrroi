import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_CART,
	IMPORT_CART,
} from "../actions/addToCartAction";
const initialState = {
	productList: [],
	numberOfItems: 0,
	totalPrice: 0,
};
/*
*/
export const addToCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			for (let i = 0; i < state.productList.length; i++) {
				console.log(state.productList[i]);
				if (
					state.productList[i].name === action.payload.name &&
					state.productList[i].size === action.payload.size
				) {
					// console.log("what");
					return {
						...state,
						productList: [
							...state.productList.slice(0, i),
							Object.assign({}, state.productList[i], {
								price:
									state.productList[i].price +
									action.payload.price,
								quantity:
									state.productList[i].quantity +
									action.payload.quantity,
							}),
							...state.productList.slice(i + 1),
						],
						totalPrice: state.totalPrice + action.payload.price,
						numberOfItems:
							state.numberOfItems + action.payload.quantity,
					};
				}
			}
			return {
				...state,
				productList: [...state.productList, action.payload],
				numberOfItems: state.numberOfItems + action.payload.quantity,
                totalPrice: state.totalPrice + action.payload.price,
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				numberOfItems: state.numberOfItems - state.productList[action.payload].quantity,
                totalPrice: state.totalPrice - state.productList[action.payload].price,
				productList: [
					...state.productList.slice(0, action.payload),
					...state.productList.slice(action.payload + 1),
				],
			};
		case IMPORT_CART: {
			return {
				productList: action.payload,
			};
		}
		case UPDATE_CART:
			return {
				...state,
			};
		default:
			return state;
	}
};
