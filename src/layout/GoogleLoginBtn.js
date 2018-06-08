import React from 'react'
import fb from 'firebase'
import {auth} from '../firebase/firebase'
import {mapLoginToProps, mapUserToProp} from '../_maps/auth'
import {connect} from 'react-redux'

class GoogleLoginBtn extends React.Component {

    constructor(props) {
        super(props)
        this.loginClicked = this.loginClicked.bind(this)
    }

    loginClicked() {
        var provider = new fb.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then(function (result) {
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                alert(token)
                // ...
            }
            // The signed-in user info.
            var user = result.user;
            console.log(user)
        }).catch(function (error) {
            console.log(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    render() {
        return <div>
            <a onClick={this.loginClicked}>Google Login</a>
        </div>
    }
}

export default connect(
    mapUserToProp,
    mapLoginToProps,
)(GoogleLoginBtn)
