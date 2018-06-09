import * as ats from './actionTypes'
import {auth} from '../_firebase/firebase'
import fb from 'firebase'

export const toggleLeftSideBar = () => ({
    type: ats.TOGGLE_LEFT_SIDEBAR
})

export const userLoginSuccess = user => ({
    type: ats.userTypes.USER_LOGIN_SUCCESS,
    user
})

export const userLogout = () => ({
    type: ats.userTypes.USER_LOGOUT
})

export const userLogout = () => {
    return (dispatch) => {
        auth.signOut().then(r => {
            console.log(r)
        }).catch(e => {
            console.log(e)
        })
    }
}

export const popupLogin = provider => {
    return function (dispatch) {
        const provider = new fb.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then(result => {
            if (result.credential) {
                var token = result.credential.accessToken
                alert(token)
            }
            var user = result.user;
            console.log(user)
        }).catch(error => {
            console.log(error)
            var errorCode = error.code;
            var errorMessage = error.message
            var email = error.email;
            var credential = error.credential
        });
    }
}