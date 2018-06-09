import {combineReducers} from 'redux'
import sidebarVisibility from './sidebarVisibility'
import login from './login'
import logout from './logout'
import user from './user'

export default combineReducers({
    sidebarVisibility,
    login,
    logout,
    user
})