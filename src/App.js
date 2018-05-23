import React, {Component} from 'react';
import './App.css';
import FixedSideBar from './partial/FixedSideBar'
import FixedSideBarResponsive from './partial/FixedSideBarResponsive'
import Header from './partial/Header'

class App extends Component {
    render() {
        return (
            <div className="App">
                <FixedSideBar/>
                <FixedSideBarResponsive/>
                <Header/>
            </div>
        );
    }
}

export default App;
