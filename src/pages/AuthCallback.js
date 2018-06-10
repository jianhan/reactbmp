import React from 'react'
import {userActions} from "../_actions/auth"
import {withRouter} from 'react-router-dom'

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
                        <h3 className="title">Authenticating</h3>
                    </div>
                    <div className="ui-block-content" style={{"textAlign": 'center'}}>
                    </div>
                </div>
            </div>
        </div>
    }

}

const mapSateToProps = state => ({
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
})


export default withRouter(AuthCallback)
