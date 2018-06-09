import {login, logout} from '../_actions/index'

export const mapUserToProp = state => ({
    user: state.user.user,
})


export const mapLoginToProps = dispatch => {
    return {
        loginSuccess: user => {
            dispatch(login.userLoginSuccess(user))
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
