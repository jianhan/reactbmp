import {login, logout, user} from '../_actions'

export const mapUserToProp = state => ({
    user: state.user.user,
})

export const mapUserDispatchesToProps = dispatch => {
    return {
        setUser: u => {
            dispatch(user.setUser(u))
        },
        removeUser: () => {
            dispatch(user.removeUser())
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
