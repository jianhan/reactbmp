import {logoutTypes} from "./actionTypes"
import {removeUser} from "./user"
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
        console.log(userLogoutRequest())
        dispatch(userLogoutRequest())
        auth.signOut().then(r => {
            dispatch(userLogoutSuccess()).dispatch(removeUser())
        }).catch(e => {
            dispatch(userLogoutFailure(e))
        })
    }
}
