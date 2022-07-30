import { authAction } from "../actionType/auth"

export const inputLogin = (value) => {
    return {
        type: authAction.AUTH_INPUT,
        payload: value
    }
}


export const loginIfo = (value) => {
    return {
        type: authAction.AUTH_LOGIN,
        payload: value
    }
}