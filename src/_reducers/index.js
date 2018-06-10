import {combineReducers} from 'redux'
import login from './login'
import logout from './logout'
import auth from './auth'

export default combineReducers({
    login,
    logout,
    auth
})