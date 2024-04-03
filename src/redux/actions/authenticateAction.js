import {authenticateActions} from "../reducers/authenticateReducer"
import { fetchDetailProduct } from "../reducers/productSlice";

function login(id,password) {

    return async(dispatch, getState) => {
        console.log("login success action")
        //  dispatch({type:"LOGIN_SUCCESS", payload:{id, password}})
        dispatch(authenticateActions.authenticate({id, password}))
    }
}

export const authenticateAction={login};