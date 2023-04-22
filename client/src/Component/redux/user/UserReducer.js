import { Get_signup_request, Get_signup_success, Get_signup_fail, Get_login_request, Get_Login_success, Get_login_fail, Get_UserDetails_request, Get_UserDetails_success, Get_UserDetails_fail } from '../constant'

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case Get_signup_request:
        case Get_login_request:
        case Get_UserDetails_request:
            return {
                loading: true,
                ...state
            }
        case Get_signup_success:
        case Get_Login_success:
        case Get_UserDetails_success:
            return {
                loading: false,
                user: action.payload
            }
        case Get_signup_fail:
        case Get_login_fail:
        case Get_UserDetails_fail:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
//  export const profileReducer = (state = {user:{}},action)=>{
//     switch (action.type) {
//         case Get_signup_request:
//             case Get_login_request:
//             case Get_UserDetails_request:
//                 return {
//                     loading: true,
//                     ...state
//                 }
//             case Get_signup_success:
//             case Get_Login_success:
//             case Get_UserDetails_success:
//                 return {
//                     loading: false,
//                     user: action.payload
//                 }
//             case Get_signup_fail:
//             case Get_login_fail:
//             case Get_UserDetails_fail:
//                 return {
//                     loading: false,
//                     error: action.payload
//                 }
//             default:
//                 return state;
// }
//  }