import * as moment from 'moment'
import {PASSPORT_CLIENT_ID, PASSPORT_CLIENT_SECRET, PASSPORT_OAUTH_TOKEN_URL} from '../.env'
import {errorMsg, http} from './Http'
import _ from 'lodash'

export function isAuthenticated() {
    if (localStorage.getItem('access_token') === null || localStorage.getItem('access_token') === '') {
        clearAuthData()
        return false
    }
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === '') {
        clearAuthData()
        return false
    }

    // check expire at
    const expireAt = localStorage.getItem('expire_at')
    if (expireAt !== null) {
        if (moment().unix() > parseInt(expireAt)) {
            clearAuthData()
            return false
        }
    }

    // check user
    const user = localStorage.getItem('user')
    if (user === null) {
        clearAuthData()
        return false
    }

    return true
}

export function clearAuthData() {
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('expire_at')
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
}

export function setAuthData(accessToken, expireIn = false, refreshToken = false, user = {}) {
    localStorage.setItem('access_token', accessToken)
    if (expireIn) {
        localStorage.setItem('expire_at', moment().unix() + expireIn)
    }
    if (refreshToken) {
        localStorage.setItem('refresh_token', refreshToken)
    }

    if (!_.isEmpty(user)) {
        localStorage.setItem('user', JSON.stringify(user))
    }
}

