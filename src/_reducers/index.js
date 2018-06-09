import {combineReducers} from 'redux'
import sidebarVisibility from './sidebarVisibility'
import login from './login'
import logout from './logout'

export default combineReducers({
    sidebarVisibility,
    login,
    logout
})