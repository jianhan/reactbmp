import * as ats from './actionTypes'

export const toggleLeftSideBar = () => ({
    type: ats.TOGGLE_LEFT_SIDEBAR
})

export const userLoginSuccess = user => ({
    type: ats.userTypes.USER_LOGIN_SUCCESS,
    user
})

export const userLogout = () => ({
    type: ats.userTypes.USER_LOGOUT
})
