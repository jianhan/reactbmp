import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './partial/Header'
import HeaderResponsive from './partial/HeaderResponsive'
import {routes} from './route/configs'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
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
