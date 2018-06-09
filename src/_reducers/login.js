import {userTypes} from "../_actions/actionTypes"

// set initial state
const initialState = {isLoggingIn: false, loginError: '', user: null}

const login = (state = initialState, action) => {
    switch (action.type) {
        // LOGIN
        case userTypes.USER_LOGIN_REQUEST:
            return Object.assign({}, state, {
                isLoggingIn: true,
                loginError: '',
                user: null,
            })
        case userTypes.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggingIn: false,
                loginError: '',
                user: action.user,
            })
        case userTypes.USER_LOGIN_FAILURE:
            return Object.assign({}, state, {
                isLoggingIn: false,
                loginError: action.error,
                user: null,
            })
        default:
            return state
    }
}

export default login