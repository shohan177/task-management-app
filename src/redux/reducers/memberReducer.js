import { memberAction } from "../actionType/member";

const initialState = {
    inputFields: {
        name: "",
        email: ""
    },
    members: []
}

export const membersReducer = (state = initialState, { type, payload }) => {
    //console.log("payload", payload)
    switch (type) {
        case memberAction.SET_MEMBER:
            return { ...state, members: payload }
            break;

        case memberAction.Add_MEMBER:
            return { ...state, inputFields: payload }
            break;

        default:
            return state
            break;
    }
}