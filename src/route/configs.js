import React from 'react'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import AuthCallback from '../pages/AuthCallback'

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home

    },
    {
        path: '/auth',
        component: Auth,
    },
    {
        path: "/callback/:name/:avatar/:email/:token",
        component: AuthCallback,

    },
]

