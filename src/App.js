import React, {Component} from 'react';
import './App.css';
import FixedSideBar from './partial/FixedSideBar'
import FixedSideBarResponsive from './partial/FixedSideBarResponsive'

class App extends Component {
    render() {
        return (
            <div className="App">
                <FixedSideBar/>
                <FixedSideBarResponsive/>
            </div>
        );
    }
}

export default App;
