import * as ats from "./actionTypes";

// LOGOUT
export const userLogoutRequest = () => ({
    type: ats.userTypes.USER_LOGOUT_REQUEST,
})

export const userLogoutSuccess = () => ({
    type: ats.userTypes.USER_LOGOUT_SUCCESS,
})

export const userLogoutFailure = error => ({
    type: ats.userTypes.USER_LOGOUT_FAILURE,
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
