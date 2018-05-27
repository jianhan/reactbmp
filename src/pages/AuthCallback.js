import React from 'react'
import {userActions} from "../_actions/user";
import {connect} from 'react-redux'

class AuthCallback extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(userActions.getUser(this.props.match.params.access_token))
    }

    render() {
        return <div className='container'>
            <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className='ui-block'>
                    <div className="ui-block-title">
                        <h4 className="title">Authenticating</h4>
                    </div>
                    <div className="ui-block-content" style={{"textAlign": 'center'}}>
                        <i className="fas fa-spinner fa-spin fa-4x"></i>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default connect()(AuthCallback)
