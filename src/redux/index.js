import {combineReducers} from "redux";
import {addToCartReducer} from "./reducers/addToCartReducer";
import {loginReducer} from "./reducers/loginReducer";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
export {login, logout} from "./actions/loginAction";
export {
	addToCart,
	removeFromCart,
	importCart,
	updateCart,
	newCart,
	importCartList,
	removeCart,
	clearAll,
} from "./actions/addToCartAction";
export default combineReducers({
	addToCartReducer,
	loginReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
});
