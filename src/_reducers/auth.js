import {userTypes} from "../_actions/actionTypes"

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {isLoggingIn: false, loginError: '', user} : {};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.GET_AUTH_USER_REQUEST:
            return {
                isLoggingIn: true,
                loginError: '',
                user: null,
            }
        case userTypes.GET_AUTH_USER_REQUEST_SUCCESS:
            return {
                isLoggingIn: false,
                loginError: '',
                user: action.user,
            }
        case userTypes.GET_AUTH_USER_REQUEST_FAILURE:
            return {
                isLoggingIn: false,
                loginError: action.error,
                user: null,
            }
        default:
            return state
    }
}

export default auth