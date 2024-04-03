import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import detailProductReducer from "./detailProductReducer";


  export default combineReducers({
    auth: authenticateReducer,
    product: productReducer,
    detailProduct: detailProductReducer
  })