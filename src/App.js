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
                this.props.loginSuccess()
            }
        });
    }
}

export default connect(
    mapUserToProp,
    mapLoginToProps,
)(App)
