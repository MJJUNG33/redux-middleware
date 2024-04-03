function login(id,password) {

    return async(dispatch, getState) => {
        console.log("login success action")
         dispatch({type:"LOGIN_SUCCESS", payload:{id, password}})
    };
}

export const authenticateAction={login};