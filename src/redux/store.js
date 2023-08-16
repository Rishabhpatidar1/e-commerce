
import { combineReducers, createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductDetailsReducer, getProductReducer } from "./productReducer.js";

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;