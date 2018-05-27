import {userTypes} from "./actionTypes"
import userService from '../_services/user'
import history from '../_common/history'

export const userActions = {
    getUser,
    logout
}

function getUser(token) {
    return dispatch => {
        dispatch(request());
        userService.getUserByToken(token).then(user => {
            dispatch(success(user))
            history.push('/auth')
        }).catch(e => {
            dispatch(failure('Invalid token, unable to retrieve user'))
        })
    };

    function request() {
        return {type: userTypes.GET_AUTH_USER_REQUEST}
    }

    function success(user) {
        return {type: userTypes.GET_AUTH_USER_REQUEST_SUCCESS, user}
    }

    function failure(error) {
        return {type: userTypes.GET_AUTH_USER_REQUEST_FAILURE, error}
    }
}

function logout() {
    userService.clearAuthUser();
    return {type: userTypes.USER_LOGOUT};
}
