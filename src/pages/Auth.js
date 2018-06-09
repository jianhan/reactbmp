import React from 'react'
import GoogleLoginBtn from '../layout/GoogleLoginBtn'
import LogoutBtn from '../_containers/LogoutBtn'
import {mapUserToProp} from '../_maps/auth'
import {connect} from 'react-redux'


class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.user) {
            return <h2>USER
                <LogoutBtn/>
            </h2>
        } else {
            return <form className="content">
                test
                <GoogleLoginBtn/>
                <div id={"firebaseui-auth-container"}>testdiv</div>

            </form>
        }
    }
}

export default connect(
    mapUserToProp,
)(Auth)