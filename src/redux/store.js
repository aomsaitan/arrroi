import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./index";
import logger from "redux-logger";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger))
	// process.env.NODE_ENV !== 'production' ? composeWithDevTools(applyMiddleware (thunk)) : applyMiddleware (thunk)
);
export default store;
