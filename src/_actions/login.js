import * as ats from "./actionTypes";

// LOGIN
export const userLoginRequest = () => ({
    type: ats.userTypes.USER_LOGIN_REQUEST,
})

export const userLoginSuccess = user => ({
    type: ats.userTypes.USER_LOGIN_SUCCESS,
    user
})

export const userLoginFailure = error => ({
    type: ats.userTypes.USER_LOGIN_FAILURE,
    error
})

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
