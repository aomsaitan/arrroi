import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_CART,
	IMPORT_CART,
	NEW_CART,
	IMPORT_CARTLIST,
	REMOVE_CART,
	CLEAR_ALL,UPDATE_OPTION
} from "../actions/addToCartAction";
const initialState = {
	id: "",
	productList: [],
	numberOfItems: 0,
	totalPrice: 0,
	cartList: [],
};
/*type: 'ADD_TO_CART',payload: {name: "เนื้อสันในวัว", size: "500 กรัม", price: 700, quantity: 7, option: [{quantity: 10, size: "250 กรัม", price: 50},{quantity: 10, size: "500 กรัม", price: 100},{size: "1000 กรัม", price: 200, quantity: 10}]}
 */
export const addToCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			if (state.productList.quantity !== 0)
				for (let i = 0; i < state.productList.length; i++) {
					if (
						state.productList[i].name === action.payload.name &&
						state.productList[i].size === action.payload.size && state.productList[i].option[
                            state.productList[
                                i
                            ].option.findIndex(
                                (item) =>
                                    item.size ===
                                    action.payload
                                        .size
                            )
                      ].quantity !==0
                    ) {
						return {
							...state,
							productList: [
								...state.productList.slice(0, i),
								Object.assign({}, state.productList[i], {
									price:
										parseInt(
											action.payload.quantity +
												state.productList[i].quantity
										) <= 999
											? parseInt(
													action.payload.quantity +
														state.productList[i]
															.quantity
											  ) <=
											  action.payload.option[
													state.productList[
														i
													].option.findIndex(
														(item) =>
															item.size ===
															action.payload.size
													)
											  ].quantity
												? action.payload.price +
												  state.productList[i].price
												: state.productList[i].option[
														state.productList[
															i
														].option.findIndex(
															(item) =>
																item.size ===
																action.payload
																	.size
														)
												  ].quantity *
												  state.productList[i].option[
														state.productList[
															i
														].option.findIndex(
															(item) =>
																item.size ===
																action.payload
																	.size
														)
												  ].price
											: 999 *
											  state.productList[i].option[
													state.productList[
														i
													].option.findIndex(
														(item) =>
															item.size ===
															action.payload.size
													)
											  ].price,
									quantity:
										parseInt(
											action.payload.quantity +
												state.productList[i].quantity
										) <= 999
											? parseInt(
													action.payload.quantity +
														state.productList[i]
															.quantity
											  ) <=
											  action.payload.option[
													state.productList[
														i
													].option.findIndex(
														(item) =>
															item.size ===
															action.payload.size
													)
											  ].quantity
												? action.payload.quantity +
												  state.productList[i].quantity
												: state.productList[i].option[
														state.productList[
															i
														].option.findIndex(
															(item) =>
																item.size ===
																action.payload
																	.size
														)
												  ].quantity
											: 999,
								}),
								...state.productList.slice(i + 1),
							],
							totalPrice:
								parseInt(
									action.payload.quantity +
										state.productList[i].quantity
								) <= 999
									? parseInt(
											action.payload.quantity +
												state.productList[i].quantity
									  ) <=
									  state.productList[i].option[
											state.productList[
												i
											].option.findIndex(
												(item) =>
													item.size ===
													action.payload.size
											)
									  ].quantity
										? state.totalPrice +
										  action.payload.price
										: state.totalPrice -
										  state.productList[i].price +
										  state.productList[i].option[
												state.productList[
													i
												].option.findIndex(
													(item) =>
														item.size ===
														action.payload.size
												)
										  ].price *
												state.productList[i].option[
													state.productList[
														i
													].option.findIndex(
														(item) =>
															item.size ===
															action.payload.size
													)
												].quantity
									: state.totalPrice -
									  state.productList[i].price +
									  999 *
											state.productList[i].option[
												state.productList[
													i
												].option.findIndex(
													(item) =>
														item.size ===
														action.payload.size
												)
											].price,
							numberOfItems:
								parseInt(
									action.payload.quantity +
										state.productList[i].quantity
								) <= 999
									? parseInt(
											action.payload.quantity +
												state.productList[i].quantity
									  ) <=
									  state.productList[i].option[
											state.productList[
												i
											].option.findIndex(
												(item) =>
													item.size ===
													action.payload.size
											)
									  ].quantity
										? state.numberOfItems +
										  action.payload.quantity
										: state.numberOfItems -
										  state.productList[i].quantity +
										  state.productList[i].option[
												state.productList[
													i
												].option.findIndex(
													(item) =>
														item.size ===
														action.payload.size
												)
										  ].quantity
									: state.numberOfItems -
									  state.productList[i].quantity +
									  999,
						};
					}
				}
			return {
				...state,
				productList: [...state.productList, action.payload],
				numberOfItems: state.numberOfItems + action.payload.quantity,
				totalPrice: state.totalPrice + action.payload.price,
			};
		case UPDATE_CART:
			return {
				...state,
				productList: [
					...state.productList.slice(0, action.payload.index),
					Object.assign({}, state.productList[action.payload.index], {
						quantity: action.payload.quantity,
						price:
							state.productList[action.payload.index].option[
								action.payload.size
							].price * action.payload.quantity,
						size:
							state.productList[action.payload.index].option[
								action.payload.size
							].size,
					}),
					...state.productList.slice(action.payload.index + 1),
				],
				totalPrice:
					state.totalPrice -
					state.productList[action.payload.index].price +
					state.productList[action.payload.index].option[
						action.payload.size
					].price *
						action.payload.quantity,
				numberOfItems:
					state.numberOfItems -
					state.productList[action.payload.index].quantity +
					action.payload.quantity,
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				numberOfItems:
					state.numberOfItems -
					state.productList[action.payload].quantity,
				totalPrice:
					state.totalPrice - state.productList[action.payload].price,
				productList: [
					...state.productList.slice(0, action.payload),
					...state.productList.slice(action.payload + 1),
				],
			};
		case IMPORT_CART: {
			let numberOfItems = 0,
				totalPrice = 0;
			for (let i = 0; i < action.payload.productList.length; i++) {
				numberOfItems += action.payload.productList[i].quantity;
				totalPrice += action.payload.productList[i].price;
			}
			return {
				...state,
				id: action.payload.id,
				productList: action.payload.productList,
				numberOfItems: numberOfItems,
				totalPrice: totalPrice,
			};
		}
		case IMPORT_CARTLIST: {
			return {...state, cartList: action.payload};
		}
		case REMOVE_CART: {
			return {
				...state,
				cartList: [
					...state.cartList.slice(0, action.payload),
					Object.assign({}, state.cartList[action.payload], {
						customer_check: true,
					}),
					...state.cartList.slice(action.payload + 1),
				],
			};
        }
        case UPDATE_OPTION: {
            return {
                ...state,
				productList: [
					...state.productList.slice(0, action.payload.index),
					Object.assign({}, state.productList[action.payload.index], {
						option:action.payload.option
					}),
					...state.productList.slice(action.payload.index + 1),
				],
            }
        }
		case NEW_CART: {
			return {...state, productList: [], numberOfItems: 0, totalPrice: 0};
		}
		case CLEAR_ALL: {
			return initialState;
		}
		default:
			return state;
	}
};
