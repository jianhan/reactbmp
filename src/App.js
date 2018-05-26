import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './layout/Header'
import HeaderResponsive from './layout/HeaderResponsive'
import {routes} from './route/configs'
import FixedSideBar from './layout/FixedSideBar'
import FixedSideBarResponsive from './layout/FixedSideBarResponsive'

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
