import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './partial/Header'
import HeaderResponsive from './partial/HeaderResponsive'
import {routes} from './route/configs'
import FixedSideBar from './partial/FixedSideBar'
import FixedSideBarResponsive from './partial/FixedSideBarResponsive'

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
                        {routes.map((route, index) => (
                            <Route path={route.path} key={index} exact={route.exact} component={route.component}/>
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
