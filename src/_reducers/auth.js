import {userTypes} from "../_actions/actionTypes"

const initialState = null ? {isLoggingIn: false, loginError: '', user: null} : {};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.USER_LOGOUT:
            return {
                isLoggingIn: false,
                loginError: '',
                user: null,
            }
        default:
            return state
    }
}

export default auth