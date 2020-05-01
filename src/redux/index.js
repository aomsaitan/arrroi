import {combineReducers} from "redux";
import {addToCartReducer} from "./reducers/addToCartReducer";
import { loginReducer } from "./reducers/loginReducer";
export { login,logout } from './actions/loginAction'
export {addToCart,removeFromCart,importCart} from './actions/addToCartAction'
export default combineReducers({
	addToCartReducer,
	loginReducer,
});
