import * as ats from '../actions/actionTypes'

const auth = (state = {}, action) => {
    switch (action.type) {
        case ats.LOGIN:
            return action.user
        case ats.LOGOUT:
            return {}
        default:
            return state
    }
}

export default auth