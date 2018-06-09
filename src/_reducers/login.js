import {actionTypes} from "../_actions/index"

// set initial state
const initialState = {isLoggingIn: false, loginError: ''}

const login = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.loginTypes.USER_LOGIN_REQUEST:
            return Object.assign({}, state, {
                isLoggingIn: true,
                loginError: '',
            })
        case actionTypes.loginTypes.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggingIn: false,
                loginError: '',
            })
        case actionTypes.loginTypes.USER_LOGIN_FAILURE:
            return Object.assign({}, state, {
                isLoggingIn: false,
                loginError: action.error,
            })
        default:
            return state
    }
}

export default login