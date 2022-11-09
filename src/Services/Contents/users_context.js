import React, {useEffect, useContext, useReducer} from 'react'
import reducer from '../Reducers/users_reducer'
import axios from 'axios'
import { GET_SINGLE_USERS_BEGIN, GET_SINGLE_USERS_SUCCESS } from '../Actions'

const initialState = {
    single_user_loading: false,
    single_user_error: false, 
    single_user: {}
}

const UsersContext = React.createContext()

export const UsersProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    fetchSingleUsers = async(url)=> {
        dispatch({type: GET_SINGLE_USERS_BEGIN})
        try{
            const response = await axios.get(url)
            const singleProduct = response.data
            dispatch({type: GET_SINGLE_USERS_SUCCESS, payload: singleProduct})
        }catch(error){
            dispatch({GET_SINGLE_USERS_ERROR})
        }
    }
    useEffect(()=>{
        fetchSingleUsers(url)
    }, [])

    return(
        <UsersContext.Provider value={{...state,fetchSingleUsers}}>
            {children}
        </UsersContext.Provider>
    )
}
export const useUsersContext = () => {
    return useContext(UsersContext)
}