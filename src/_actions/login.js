import {loginTypes} from "./actionTypes";
import {auth} from '../_firebase/firebase'
import fb from 'firebase'

// LOGIN
export const userLoginRequest = () => ({
    type: loginTypes.USER_LOGIN_REQUEST
})

export const userLoginSuccess = () => ({
    type: loginTypes.USER_LOGIN_SUCCESS,
})

export const userLoginFailure = error => ({
    type: loginTypes.USER_LOGIN_FAILURE,
    error
})

export const doPopupLogin = provider => {
    return dispatch => {
        dispatch(userLoginRequest())
        const provider = new fb.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then(result => {
            let user = result.user
            if (result.credential) {
                user.idToken = result.credential.accessToken
                dispatch(userLoginSuccess())
            } else {
                dispatch(userLoginFailure({
                    message: 'Credential not set'
                }))
            }
        }).catch(error => {
            dispatch(userLoginFailure(error))
        });
    }
}
