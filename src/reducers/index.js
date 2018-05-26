import {combineReducers} from 'redux'
import sidebarVisibility from './sidebarVisibility'
import auth from './auth'

export default combineReducers({
    sidebarVisibility,
    auth
})