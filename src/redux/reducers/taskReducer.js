import { taskAction } from "../actionType/task";

const initialState = {
    inputFields: {
        title: "",
        discription: "",
        assign: "",
        members: []
    },
    tasks: [
        {
            title: "auth system",
            discription: "some some",
            assign: "jamal"
        }
    ]
}

export const taskReducer = (state = initialState, { type, payload }) => {
    // console.log("paylaod", payload)
    switch (type) {
        case taskAction.SET_TASK:
            return { ...state, tasks: payload }
            break;

        case taskAction.Add_TASK:
            return { ...state, inputFields: payload }
            break;

        default:
            return state
            break;
    }
}