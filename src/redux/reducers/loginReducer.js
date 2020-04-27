import {LOGIN, LOGOUT} from "../actions/loginAction";
const initialState = {
    isLoggedIn: false,    
    username: ""
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLoggedIn: true,
				username: action.username,
			};
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				username: action.username,
			};
		default:
			return state;
	}
};
