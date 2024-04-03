// import { applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers"
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";


// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) 

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer,detailProductReducer
    }
})

export default store