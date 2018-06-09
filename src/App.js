import React, {Component} from 'react'
import {Route} from "react-router-dom"
import Header from './layout/Header'
import HeaderResponsive from './layout/HeaderResponsive'
import FixedSideBar from './layout/FixedSideBar'
import FixedSideBarResponsive from './layout/FixedSideBarResponsive'
import {routes} from './_route/configs'
import {mapLoginToProps, mapUserToProp} from './_maps/auth'
import {auth} from './_firebase/firebase'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        return (
            <div className="App">
                <FixedSideBar/>
                <FixedSideBarResponsive/>
                <Header/>
                <HeaderResponsive/>
                <div className="header-spacer"></div>
                <div className="container">
                    {routes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    )}
                </div>
            </div>

        );
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user !== null) {
                user.getIdToken().then(r => {
                    user.idToken = r
                    this.props.loginSuccess(user)
                })
            } else {

            }
        });
        // auth.onAuthStateChanged(function (user) {
        //     if (user) {
        //         // User is signed in.
        //         // var displayName = user.displayName;
        //         // var email = user.email;
        //         // var emailVerified = user.emailVerified;
        //         // var photoURL = user.photoURL;
        //         // var isAnonymous = user.isAnonymous;
        //         // var uid = user.uid;
        //         // var providerData = user.providerData;
        //         user.getIdToken().then(r => {
        //             user.idToken = r
        //         });
        //         // ...
        //     } else {
        //         // User is signed out.
        //         // ...
        //         var provider = new fb.auth.GoogleAuthProvider()
        //         auth.signInWithRedirect(provider)
        //         auth.getRedirectResult().then(function (result) {
        //             if (result.credential) {
        //                 // This gives you a Google Access Token. You can use it to access the Google API.
        //                 var token = result.credential.accessToken;
        //                 // ...
        //             }
        //             // The signed-in user info.
        //             var user = result.user;
        //             console.log(user)
        //         }).catch(function (error) {
        //             console.log(error)
        //             // Handle Errors here.
        //             var errorCode = error.code;
        //             var errorMessage = error.message;
        //             // The email of the user's account used.
        //             var email = error.email;
        //             // The firebase.auth.AuthCredential type that was used.
        //             var credential = error.credential;
        //             // ...
        //         });
        //     }
        // });

    }
}

export default connect(
    mapUserToProp,
    mapLoginToProps,
)(App)
