import {
    GET_SINGLE_USERS_BEGIN,
    GET_SINGLE_USERS_SUCCESS,
    GET_SINGLE_USERS_ERROR
} from "../Actions"

const users_reducer = (state, action) => {
    if(action.type === GET_SINGLE_USERS_BEGIN){
        return {}
    }
    if(action.type === GET_SINGLE_USERS_ERROR){
        return {}
    }
    if(action.type === GET_SINGLE_USERS_SUCCESS){
        return {}
    }
}