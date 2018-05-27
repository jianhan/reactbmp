import {userTypes} from "./actionTypes"
import userService from '../_services/user'

export const userActions = {
    getUser
}

function getUser(token) {
    return dispatch => {
        dispatch(request());
        userService.getUserByToken(token).then(user => {
            dispatch(success(user))
        }).catch(error => {
            dispatch(failure(error))
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

