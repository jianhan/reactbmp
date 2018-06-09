import {userLoginSuccess, userLogout} from "../_actions/actionCreators";

export const mapUserToProp = state => ({
    user: state.auth.user,
})


export const mapLoginToProps = dispatch => {
    return {
        loginSuccess: user => {
            dispatch(userLoginSuccess(user))
        }
    }
}

export const mapUserLogoutToProps = dispatch => {
    return {
        userLogout: () => {
            dispatch(userLogout())
        }
    }
}
