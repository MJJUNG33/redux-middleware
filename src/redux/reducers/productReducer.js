import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    detailProduct: [],
}  

// function productReducer(state=initialState, action){
//      const {type, payload} = action
//      switch(type) {
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, products: payload.data}
//         case "DETAIL_PRODUCT":
//             return {...state, detailProduct:payload.data}
       
//         default:
//              return {...state}
//      }
// } 


// export default productReducer;

const productSlice = createSlice({name:"product"
    ,initialState, reducers: {
        getAllProduct(state, action) {
            state.products = action.payload.data},
        getDetailProduct(state, action){
            state.detailProduct=action.payload.data}
        }
    }
    )
export const productActions = productSlice.actions
export default productSlice.reducer