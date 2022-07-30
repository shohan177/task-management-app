import { combineReducers } from "redux";
import { membersReducer } from './memberReducer';
import { taskReducer } from "./taskReducer";


const reducers = combineReducers({
    memberData: membersReducer,
    taskData: taskReducer

})

export default reducers