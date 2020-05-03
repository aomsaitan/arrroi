import {UPDATE, CLEAR,FINISH} from "../actions/notificationAction";
const initialState = {
	quantity: 0,
	isFinished: false,
};

export const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE:
			return {
				...state,
				quantity: action.payload,
			};
		case FINISH:
			return {
				...state,
				isFinished: true,
			};
		case CLEAR:
			return initialState;
		default:
			return state;
	}
};
