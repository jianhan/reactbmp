import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Root from './Root'
import {applyMiddleware, createStore} from 'redux'
import registerServiceWorker from './registerServiceWorker'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './_reducers/index'

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'),
);
registerServiceWorker();
