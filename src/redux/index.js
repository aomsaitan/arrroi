import {combineReducers} from "redux";
import {addToCartReducer} from "./reducers/addToCartReducer";
import {loginReducer} from "./reducers/loginReducer";
import {firebaseReducer} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { notificationReducer} from "./reducers/notificationReducer";
import { shopReducer } from './reducers/shopReducer'
export {clearShop,importShop,updateShop,removeShop} from './actions/shopAction'
export {updateNotification,finish} from "./actions/notificationAction";
export {login, logout} from "./actions/loginAction";
export {
	addToCart,
	removeFromCart,
	importCart,
	updateCart,
	newCart,
	importCartList,
	removeCart,
	clearAll,updateOption
} from "./actions/addToCartAction";
export default combineReducers({
	addToCartReducer,
    loginReducer,
    notificationReducer,
    shopReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
});
