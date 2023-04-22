import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { loginReducer, profileReducer } from './Component/redux/user/UserReducer';
import { GetfavoritesongReducer, productDetailsReducer,productsReducer} from './Component/redux/Product/ProductReducer'




const rootReducer = combineReducers({
login:loginReducer,
Signup:loginReducer,
Profile:loginReducer,
// product section
productDetails:productDetailsReducer,
products:productsReducer,
favroutesong:GetfavoritesongReducer,


})
// here I let intial state is empity  

let initialState = {}; 
const middleware =[thunk]

const store = createStore(
    rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store