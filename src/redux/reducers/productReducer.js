const initialState = {
    products: [],
    detailProduct: [],
}

function productReducer(state=initialState, action){
     const {type, payload} = action
     switch(type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, products: payload.data}
        case "DETAIL_PRODUCT":
            return {...state, detailProduct:payload.data}
       
        default:
             return {...state}
     }
} 


export default productReducer;