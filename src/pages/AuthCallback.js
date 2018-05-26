import React from 'react'
import axios from 'axios'
import {PASSPORT_API_URL} from '../.env.js'
import {setAuthData} from '../_common/auth'

export default class AuthCallback extends React.Component {

    constructor(props) {
        super(props)
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

    render() {
        return <div className='container'>
            <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className='ui-block'>
                    <div className="ui-block-title">
                        <h4 className="title">Authenticating</h4>
                    </div>
                    <div className="ui-block-content" style={{"text-align": 'center'}}>
                        <i className="fas fa-spinner fa-spin fa-4x"></i>
                    </div>
                </div>
            </div>
        </div>
    }

}
