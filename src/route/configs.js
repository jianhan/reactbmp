import React from 'react'
import {Route} from "react-router-dom"
import Home from '../page/Home'
import Auth from '../page/Auth'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/',
        component: Auth
    }
]

export const RouteWrapper = route => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={routes}/>
    )}
    />
);
