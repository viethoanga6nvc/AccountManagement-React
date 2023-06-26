import { combineReducers, legacy_createStore as createRoot, applyMiddleware, compose } from "redux";
import accountReducer from "./Reducers/AccountReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    account: accountReducer
});

const composeEnhencersDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createRoot(rootReducer, composeEnhencersDevTools(applyMiddleware(thunk)));

export default store;