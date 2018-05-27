import React from 'react'
import {connect} from 'react-redux'
import {userActions} from "../_actions/user";
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
                        {this.props.isLoggingIn &&
                        <i className="fas fa-spinner fa-spin fa-4x"></i>
                        }
                        {this.props.loginError !== "" && (
                            <div className="alert alert-danger" role="alert">
                                <h4>{this.props.loginError}</h4>
                            </div>
                        )}
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


export default withRouter(connect(mapSateToProps)(AuthCallback))
