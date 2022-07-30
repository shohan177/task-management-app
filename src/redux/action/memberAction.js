import { memberAction } from "../actionType/member"

export const setMembers = (value) => {
    return {
        type: memberAction.SET_MEMBER,
        payload: value
    }
}


export const inputMember = (value) => {
    return {
        type: memberAction.Add_MEMBER,
        payload: value
    }
}