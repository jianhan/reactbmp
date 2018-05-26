import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Root from './Root'
import {createStore} from 'redux'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './_reducers/index'

const store = createStore(rootReducer)

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'),
);
registerServiceWorker();
