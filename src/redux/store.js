import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./index";
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['loginReducer','addToCartReducer','shopReducer']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export default () => {
    let store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(logger))
        // process.env.NODE_ENV !== 'production' ? composeWithDevTools(applyMiddleware (thunk)) : applyMiddleware (thunk)
    );
    let persistor = persistStore(store)
    return {store,persistor}
};
