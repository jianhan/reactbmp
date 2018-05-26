import * as ats from './actionTypes'

export const toggleLeftSideBar = () => {
    type: ats.TOGGLE_LEFT_SIDEBAR
}

export const login = user => {
    type: ats.LOGIN,
        user
}

export const logout = () => {
    type: ats.LOGOUT
}
