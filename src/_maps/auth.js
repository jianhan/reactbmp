import {userLoginSuccess} from "../_actions/actionCreators";

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
