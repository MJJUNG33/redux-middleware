// import { applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers"
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import authenticateSlice from "./slices/authenticateSlice";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
  reducer: {
    auth: authenticateSlice,
    product: productSlice,
  },
});

export default store;
