import React from 'react'
import {mapDoPopupLoginToProps, mapUserToProp} from '../_maps/auth'
import {connect} from 'react-redux'

class GoogleLoginBtn extends React.Component {

    constructor(props) {
        super(props)
        this.loginClicked = this.loginClicked.bind(this)
    }

    loginClicked() {
        this.props.doPopupLogin('google')
    }

    render() {
        return <div>
            <a onClick={this.loginClicked}>Google Login</a>
        </div>
    }
}

export default connect(
    mapUserToProp,
    mapDoPopupLoginToProps,
)(GoogleLoginBtn)
