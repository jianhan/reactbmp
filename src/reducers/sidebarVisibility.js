import * as ats from '../actions/actionTypes'

const toggleSidebar = (state = true, action) => {
    switch (action.type) {
        case ats.TOGGLE_LEFT_SIDEBAR:
            return !state
        default:
            return state
    }
}

export default toggleSidebar