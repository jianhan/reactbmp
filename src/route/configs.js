import React from 'react'
import Home from '../pages/Home'
import Auth from '../pages/Auth'

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

