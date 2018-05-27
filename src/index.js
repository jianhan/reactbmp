import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Root from './Root'
import {applyMiddleware, createStore} from 'redux'
import registerServiceWorker from './registerServiceWorker'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './_reducers/index'
import {Router} from 'react-router-dom'
import history from './_common/history'

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
)

ReactDOM.render(
    <Router history={history}>
        <Root store={store}/>
    </Router>,
    document.getElementById('root'),
);
registerServiceWorker();
