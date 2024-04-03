import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import detailProductReducer from "./productReducer";


  export default combineReducers({
    auth: authenticateReducer,
    product: productReducer,detailProductReducer
  
  })