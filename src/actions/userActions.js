import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_LIST_RESET,
} from '../constants/userConstants'


// Users Login
export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('https://fakestoreapi.com/auth/login', {username, password}, config)
        console.log(data)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message,
        })
    }
}

// Logout
export const logout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT
    })
    dispatch({
        type: USER_LIST_RESET
    })
    localStorage.removeItem('userInfo')
}