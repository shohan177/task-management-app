import { taskAction } from "../actionType/task"
export const setTask = (value) => {
    return {
        type: taskAction.SET_TASK,
        payload: value
    }
}


export const inputTask = (value) => {
    return {
        type: taskAction.Add_TASK,
        payload: value
    }
}