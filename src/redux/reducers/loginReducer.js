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
				username: action.payload,
			};
        case LOGOUT:
            return initialState;
		default:
			return state;
	}
};
