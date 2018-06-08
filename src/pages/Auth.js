import React from 'react'
import fb from 'firebase'
import {auth} from '../firebase/firebase'
import axios from 'axios'

export default class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <form className="content">
            test
            <div id={"firebaseui-auth-container"}>testdiv</div>
        </form>
    }

    componentDidMount() {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                user.getIdToken().then(r => {
                    let config = {
                        headers: {
                            'Authorization': 'Bearer ' + r
                        }
                    }
                    axios.get("http://localhost:8082", config).then(r => {
                        console.log(r)
                    })
                });
                // ...
            } else {
                // User is signed out.
                // ...
                var provider = new fb.auth.GoogleAuthProvider()
                auth.signInWithRedirect(provider)
                auth.getRedirectResult().then(function (result) {
                    if (result.credential) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
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
        });

    }
}