import { authAction } from "../actionType/auth";

const initialState = {
    inputFields: {
        email: "",
        password: ""
    },
    userInfo: {
        userName: "",
        loginStaus: false,
        error: ""
    }
}

export const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case authAction.AUTH_INPUT:
            return { ...state, inputFields: payload }
            break;

        case authAction.AUTH_LOGIN:
            console.log("paylaod", payload)
            return { ...state, userInfo: payload }
            break;

        case authAction.AUTH_OUT:

            localStorage.removeItem("userInfo")
            return { ...state, userInfo: payload }
            break;

        default:
            return state
            break;
    }
}