import { authAction } from "../actionType/auth"

export const inputLogin = (value) => {
    return {
        type: authAction.AUTH_INPUT,
        payload: value
    }
}


export const loginInfo = (value) => {
    return {
        type: authAction.AUTH_LOGIN,
        payload: value
    }
}


export const logOutUser = (value) => {
    return {
        type: authAction.AUTH_OUT,
        payload: value
    }
}

