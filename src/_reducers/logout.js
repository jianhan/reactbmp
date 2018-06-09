import {userTypes} from "../_actions/actionTypes"

// set initial state
const initialState = {isLoggingOut: false, logoutError: ''}

const logout = (state = initialState, action) => {
    switch (action.type) {
        // LOGOUT
        case userTypes.USER_LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isLoggingOut: true,
                logoutError: '',
            })
        case userTypes.USER_LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isLoggingOut: false,
                logoutError: '',
            })
        case userTypes.USER_LOGIN_FAILURE:
            return Object.assign({}, state, {
                isLoggingOut: false,
                logoutError: action.error,
            })
        default:
            return state
    }
}

export default logout