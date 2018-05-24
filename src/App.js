import React, {Component} from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import FixedSideBar from './partial/FixedSideBar'
import FixedSideBarResponsive from './partial/FixedSideBarResponsive'
import Header from './partial/Header'
import HeaderResponsive from './partial/HeaderResponsive'
import {routes, RouteWrapper} from './route/configs'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <FixedSideBar/>
                    <FixedSideBarResponsive/>
                    <Header/>
                    <HeaderResponsive/>
                    <div className="header-spacer"></div>
                    <div className="container">
                        {routes.map((route, i) => <RouteWrapper key={i} {...route} />)}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
