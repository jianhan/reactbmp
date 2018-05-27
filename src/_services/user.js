import axios from 'axios'
import {setAuthData} from '../_common/auth'
import {PASSPORT_API_URL} from '../.env.js'
import _ from 'lodash'


const userService = {
    getUserByToken,
    isAuthenticated,
    clearAuthStorage,
    generateUser,
    setAuthUser
}

const getUserByToken = (access_token) => {
    return axios.get(PASSPORT_API_URL + '/api/user', {headers: {'Authorization': 'Bearer ' + access_token}}).then(r => {
        const user = {'email': r.data.email, 'name': r.data.name, 'avatar': r.data.avatar, 'access_token': access_token}
        setAuthData(
            access_token,
            user
        )
        return user
    }).catch(e => {
        throw 'Invalid token'
    })
}

const isAuthenticated = () => {
    const user = localStorage.getItem('user')
    if (user === null || user === '') {
        return false
    }

    // check access token
    if (!_.get(user, 'access_token', false)) {
        return false
    }

    // check expireAt
    const expireAt = _.get(user, 'expire_at', null)
    if (!_.isNull(expireAt) && _.isInteger(expireAt)) {
        if (moment().unix() > parseInt(expireAt)) {
            return false
        }
    }

    return true
}

const clearAuthStorage = () => {
    localStorage.removeItem('user')
}

const generateUser = (id, email, name, avatar, access_token, refresh_token = null, expire_at = null) => {
    return {
        id,
        email,
        name,
        avatar,
        access_token,
        refresh_token,
        expire_at
    }
}

const setAuthUser = (user = {}) => {
    localStorage.setItem('user', user)
}

export default userService