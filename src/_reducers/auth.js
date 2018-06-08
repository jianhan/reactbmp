import {userTypes} from "../_actions/actionTypes"

// set initial state
const initialState = {isLoggingIn: false, loginError: '', user: null}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.USER_LOGOUT:
            return {
                isLoggingIn: false,
                loginError: '',
                user: null,
            }
        case userTypes.USER_LOGIN_SUCCESS:
            return {
                isLoggingIn: false,
                loginError: '',
                user: action.user,
            }
        default:
            return state
    }
}

export default auth