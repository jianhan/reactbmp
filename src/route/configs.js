import React from 'react'
import Home from '../page/Home'
import Auth from '../page/Auth'
import FixedSideBar from '../partial/FixedSideBar'
import FixedSideBarResponsive from '../partial/FixedSideBarResponsive'

export const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div><FixedSideBar/><FixedSideBarResponsive/></div>,
        component: Home

    },
    {
        path: '/auth',
        sidebar: () => <div><FixedSideBar/><FixedSideBarResponsive/></div>,
        component: Auth,
    }
]

