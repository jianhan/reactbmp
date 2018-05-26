import * as moment from 'moment'
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

export function setAuthData(accessToken, user = {}, expireIn = false, refreshToken = false) {
    if (accessToken == '') {
        throw 'Empty access token'
    }
    if (_.isEmpty(user)) {
        throw 'Empty user'
    }
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('user', JSON.stringify(user))
    if (expireIn) {
        localStorage.setItem('expire_at', moment().unix() + expireIn)
    }
    if (refreshToken) {
        localStorage.setItem('refresh_token', refreshToken)
    }
}

