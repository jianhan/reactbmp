import React from 'react'
import GoogleLoginBtn from '../layout/GoogleLoginBtn'

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <form className="content">
            test
            <GoogleLoginBtn/>
            <div id={"firebaseui-auth-container"}>testdiv</div>
        </form>
    }

}

export default Auth