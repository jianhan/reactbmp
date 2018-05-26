import React from 'react'

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
    }

}
