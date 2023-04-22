import {
    Get_signup_request, Get_signup_success, Get_signup_fail,
    Get_login_request, Get_Login_success, Get_login_fail, Get_UserDetails_request, Get_UserDetails_success, Get_UserDetails_fail,
} from '../constant'

import axios from 'axios'





export const Registration = (User) => async (dispatch) => {
    try {
        console.log(User)
        dispatch({ type: Get_signup_request })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post('http://localhost:27017/api/signup', User, { withCredentials: true }, config)
        console.log(data)
        dispatch({
            type: Get_signup_success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Get_signup_fail,
            payload: error.response
        })
    }
}
export const login = (User) => async (dispatch) => {
    try {
        console.log(User)
        dispatch({ type: Get_login_request })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post('http://localhost:27017/api/login', User, { withCredentials: true }, config)
        console.log(data)
        dispatch({
            type: Get_Login_success,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: Get_login_fail,
            payload: error.response
        })
    }
}
export const UserDetails = () => async (dispatch) => {
    try {
        dispatch({ type: Get_UserDetails_request })
        const {data} = await axios.get('http://localhost:27017/api/Profile', { withCredentials: true })
        console.log(data)
        dispatch({
            type: Get_UserDetails_success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Get_UserDetails_fail,
            payload: error.response
        })
    }
}

