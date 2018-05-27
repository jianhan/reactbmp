import axios from 'axios'
import {setAuthData} from '../_common/auth'
import {PASSPORT_API_URL} from '../.env.js'

const userService = {
    getUserByToken,
}

function getUserByToken(access_token) {
    return axios.get(PASSPORT_API_URL + '/api/user', {headers: {'Authorization': 'Bearer ' + access_token}}).then(r => {
        const user = {'email': r.data.email, 'name': r.data.name, 'avatar': r.data.avatar}
        setAuthData(
            access_token,
            user
        )
        return user
    })
}

export default userService