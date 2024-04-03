import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
    password: "",
    authenticate: false
}

// function authenticateReducer(state=initialState, action){
//      const {type, payload} = action
//      switch(type) {
//         case "LOGIN_SUCCESS":
//             console.log("login success reducer")
//             return {...state, id: payload.id, password: payload.password, authenticate:true}
//         default:
//              return {...state}
//      }
// } 

const authenticateSlice = createSlice({name:"authenticate", initialState, reducers: {
    authenticate(state,action) {
        state.id = action.payload.id;
        state.password = action.payload.password;
        state.authenticate = action.payload.authenticate;
    }
}})

export const authenticateActions = authenticateSlice.actions
export default authenticateSlice.reducer;