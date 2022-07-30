import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { membersReducer } from './memberReducer';
import { taskReducer } from "./taskReducer";


const reducers = combineReducers({
    memberData: membersReducer,
    taskData: taskReducer,
    authData: authReducer

})

export default reducers