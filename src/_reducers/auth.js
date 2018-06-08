import {userTypes} from "../_actions/actionTypes"
import userService from '../_services/user'

let user = userService.getAuthUser()

const initialState = user ? {isLoggingIn: false, loginError: '', user} : {};

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