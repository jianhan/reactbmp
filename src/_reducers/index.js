import {combineReducers} from 'redux'
import login from './login'
import logout from './logout'
import user from './user'

export default combineReducers({
    login,
    logout,
    user
})