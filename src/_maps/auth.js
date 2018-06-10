import {auth, login, logout} from '../_actions'
import _ from 'lodash'

export const mapUserToProp = state => ({
    user: _.isEmpty(state.auth) ? null : state.auth.user,
})

export const mapUserDispatchesToProps = dispatch => {
    return {
        setUser: u => {
            dispatch(auth.setUser(u))
        },
        removeUser: () => {
            dispatch(auth.removeUser())
        }
    }
}

export const mapLoginToProps = dispatch => {
    return {
        loginSuccess: user => {
            dispatch(login.userLoginSuccess(user))
        },
        logoutSuccess: user => {
            dispatch(logout.userLogoutSuccess())
        }
    }
}

export const mapUserLogoutToProps = dispatch => {
    return {
        doUserLogout: () => {
            dispatch(logout.doUserLogout())
        }
    }
}

export const mapDoPopupLoginToProps = dispatch => {
    return {
        doPopupLogin: provider => {
            dispatch(login.doPopupLogin(provider))
        }
    }
}
