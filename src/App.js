import React, {Component} from 'react';
import FixedSideBar from './partial/FixedSideBar'
import FixedSideBarResponsive from './partial/FixedSideBarResponsive'
import Header from './partial/Header'
import HeaderResponsive from './partial/HeaderResponsive'

class App extends Component {
    render() {
        return (
            <div className="App">
                <FixedSideBar/>
                <FixedSideBarResponsive/>
                <Header/>
                <HeaderResponsive/>
            </div>
        );
    }
}

export default App;
