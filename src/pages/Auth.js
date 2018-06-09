import React from 'react'
import GoogleLoginBtn from '../layout/GoogleLoginBtn'
import LogoutBtn from '../_containers/LogoutBtn'


class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <form className="content">
            test
            <GoogleLoginBtn/>
            <div id={"firebaseui-auth-container"}>testdiv</div>
            <LogoutBtn/>
        </form>
    }

}

export default Auth