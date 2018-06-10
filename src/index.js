import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'
import {Router} from 'react-router-dom'
import history from './_common/history'
import store from './_store'

ReactDOM.render(
    <Router history={history}>
        <Root store={store}/>
    </Router>,
    document.getElementById('root'),
);
registerServiceWorker();
