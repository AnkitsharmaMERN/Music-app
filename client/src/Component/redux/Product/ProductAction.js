import {
    Get_Songs_request, Get_songs_success, Get_songs_fail,
    Get_all_product_request, Get_all_product_fail, Get_all_product_success,
    Get_Addtofavorite_Request, Get_Addtofavorite_success, Get_Addtofavorite_fail, Get_favoriteSongs_request, Get_favoriteSongs_success, Get_favoriteSongs_fail,
} from '../constant'
import axios from 'axios'


export const productsAction = () => async (dispatch) => {
    try {
        dispatch({ type: Get_all_product_request })
        const { data } = await axios.get('http://localhost:27017/api/products', { withCredentials: true })
        dispatch({
            type: Get_all_product_success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Get_all_product_fail,
            payload: error.response
        })
    }
}




export const productDetails = (id) => async (dispatch) => {
    try {
        console.log(id)
        dispatch({ type: Get_Songs_request })
        const { data } = await axios.get(`http://localhost:27017/api/product/${id}`, { withCredentials: true })
        dispatch({
            type: Get_songs_success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Get_songs_fail,
            payload: error.response
        })
    }
}


export const Addtofavorite = (id) => async (dispatch) => {
    try {
        console.log(id)
        dispatch({ type: Get_Addtofavorite_Request })
        const { data } = await axios.post('http://localhost:27017/api/Addtofavorite', id, { withCredentials: true })
        console.log(data)
        dispatch({
            type: Get_Addtofavorite_success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Get_Addtofavorite_fail,
            payload: error.response
        })
    }
}

export const Getfavoritesong = () => async (dispatch) => {
    try {
        dispatch({ type: Get_favoriteSongs_request })
        const { data } = await axios.get('http://localhost:27017/api/getfavSong', { withCredentials: true })
        console.log(data)
        dispatch({
            type: Get_favoriteSongs_success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Get_favoriteSongs_fail,
            payload: error.response
        })
    }
}
