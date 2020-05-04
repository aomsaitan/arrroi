import {CLEAR_SHOP,IMPORT_SHOP,UPDATE_SHOP} from '../actions/shopAction'
const initialState = {
    store_id: '',
    orderList:[]
}

export const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case IMPORT_SHOP:
			return {
				...state,
				store_id : action.payload
			};
		case UPDATE_SHOP:
			return {
				...state,
				orderList: action.payload,
			};
		case CLEAR_SHOP:
			return initialState;
		default:
			return state;
	}
};
