import {combineReducers} from 'redux'
import sidebarVisibility from './sidebarVisibility'
import login from './auth'

export default combineReducers({
    sidebarVisibility,
    login,
})