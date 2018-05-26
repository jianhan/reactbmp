import React from 'react'
import axios from 'axios'
import {PASSPORT_API_URL} from '../.env.js'
import {setAuthData} from '../common/auth'

export default class AuthCallback extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <h3>ID: {this.props.match.params.access_token}</h3>
        </div>
    }

    componentDidMount() {
        axios.get(PASSPORT_API_URL + '/api/user', {headers: {'Authorization': 'Bearer ' + this.props.match.params.access_token}}).then(r => {
            try {
                setAuthData(
                    this.props.match.params.access_token,
                    {'email': r.data.email, 'name': r.data.name, 'avatar': r.data.avatar}
                )
            } catch (e) {

            }
        }).catch(e => {

        })
    }

}
