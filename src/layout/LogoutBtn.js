import React from 'react'
import PropTypes from 'prop-types'

const LogoutBtn = ({userLogout}) => (
    <a href="" onClick={e => {
        e.preventDefault()
        userLogout()
    }}>Logout</a>
)

LogoutBtn.propTypes = {
    userLogout: PropTypes.func.isRequired,
}

export default LogoutBtn
