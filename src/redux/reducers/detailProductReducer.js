const initialState = {
    detailProduct: [],
    authenticate: false
}

function detailProductReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case "DETAIL_PRODUCT":
            return {...state,  detailProduct:payload.data}
        default:
            return {...state}
    }
}


export default detailProductReducer