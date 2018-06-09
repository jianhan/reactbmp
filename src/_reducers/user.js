import {userTypes} from "../_actions/index"

// set initial state
const initialState = {user: null}

const user = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.SET_USER:
            return Object.assign({}, state, {
                user: action.user,
            })
        case userTypes.REMOVE_USER:
            return Object.assign({}, state, {
                user: null,
            })
        default:
            return state
    }
}

export default user