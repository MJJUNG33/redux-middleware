import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    detailProduct: null, 
    isLoading: false,
    error: null
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

export const fetchProducts = createAsyncThunk('product/fetchAll',async(searchQuery,thunkApi) => {
    try{
    const url = `https://my-json-server.typicode.com/MJJUNG33/shopping-mall/products?q=${searchQuery}`;
    const response = await fetch(url);
    return await response.json();
}catch(error) {
    thunkApi.rejectWithValue(error.message)
}
})

export const fetchDetailProduct = createAsyncThunk('product/fetchDetailProduct',async(id,thunkApi) => {
    try{
        console.log('Fetching detail product with ID:', id);
        const url = `https://my-json-server.typicode.com/MJJUNG33/shopping-mall/products/${id}`;
        const response = await fetch(url);
        return await response.json();
}catch(error) {
    thunkApi.rejectWithValue(error.message)
}
})
    
const productSlice = createSlice({name:"product"
    ,initialState, reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state)=>{
        state.isLoading = true
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.isLoading = false
            state.products = action.payload
            console.log(state.products)
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.payload

        }).addCase(fetchDetailProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(fetchDetailProduct.fulfilled, (state,action)=>{
            state.isLoading = false
            state.detailProduct = action.payload
        })
        .addCase(fetchDetailProduct.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        })
    }
    })

export const productActions = productSlice.actions
export default productSlice.reducer
