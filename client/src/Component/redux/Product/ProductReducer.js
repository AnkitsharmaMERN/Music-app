import {
    Get_Songs_request, Get_songs_success, Get_songs_fail,
    Get_all_product_request, Get_all_product_success, Get_all_product_fail,
    Get_favoriteSongs_request, Get_favoriteSongs_success, Get_favoriteSongs_fail,
} from '../constant'
// here i need to put the data into array because i can call data through method like .map method 
export const productsReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case Get_all_product_request:
            return {
                loading: true,
                ...state
            }
        case Get_all_product_success:
            return {
                loading: false,
                product: action.payload
            }
        case Get_all_product_fail:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}



export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case Get_Songs_request:
            return {
                loading: true,
                ...state
            }
        case Get_songs_success:
            return {
                loading: false,
                product: action.payload
            }
        case Get_songs_fail:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}



export const GetfavoritesongReducer = (state = {song:{}},action)=>{
    switch (action.type) {
        case Get_favoriteSongs_request:
            return{
                loading:true,
                ...state
            }
    case Get_favoriteSongs_success:
        return{
            loading:false,
            song:action.payload
        }
        case Get_favoriteSongs_fail:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

