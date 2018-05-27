import axios from 'axios'
import {PASSPORT_API_URL} from '../.env.js'
import moment from 'moment'
import _ from 'lodash'


const userService = {
    getUserByToken,
    isAuthenticated,
    clearAuthUser,
    generateUser,
    setAuthUser,
    getAuthUser
}

function getUserByToken(access_token) {
    clearAuthUser()
    return axios.get(PASSPORT_API_URL + '/api/user', {headers: {'Authorization': 'Bearer ' + access_token}}).then(r => {
        const user = {
            'id': r.data.id,
            'email': r.data.email,
            'name': r.data.name,
            'avatar': r.data.avatar,
            'access_token': access_token
        }
        this.setAuthUser(user)
        return user
    })
}

function isAuthenticated() {
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

function clearAuthUser() {
    localStorage.removeItem('user')
}

function generateUser(id, email, name, avatar, access_token, refresh_token = null, expire_at = null) {
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

function setAuthUser(user = {}) {
    localStorage.setItem('user', JSON.stringify(user))
}

function getAuthUser() {
    return JSON.parse(localStorage.getItem('user'))
}

export default userService