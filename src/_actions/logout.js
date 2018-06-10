import {logoutTypes} from "./actionTypes"
import {auth} from '../_firebase'

// LOGOUT
export const userLogoutRequest = () => ({
    type: logoutTypes.USER_LOGOUT_REQUEST,
})

export const userLogoutSuccess = () => ({
    type: logoutTypes.USER_LOGOUT_SUCCESS,
})

export const userLogoutFailure = error => ({
    type: logoutTypes.USER_LOGOUT_FAILURE,
    error
})


export const doUserLogout = () => {
    return (dispatch) => {
        dispatch(userLogoutRequest())
        auth.signOut().then(r => {
            dispatch(userLogoutSuccess())
        }).catch(e => {
            dispatch(userLogoutFailure(e))
        })
    }
}
