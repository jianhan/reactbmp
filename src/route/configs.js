import React from 'react'
import Home from '../page/Home'
import Auth from '../page/Auth'

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home

    },
    {
        path: '/auth',
        component: Auth,
    }
]

