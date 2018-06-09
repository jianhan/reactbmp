import React from 'react'
import PropTypes from 'prop-types'

const LogoutBtn = ({doUserLogout}) => (
    <a href="" onClick={e => {
        e.preventDefault()
        doUserLogout()
    }}>Logout</a>
)

LogoutBtn.propTypes = {
    userLogout: PropTypes.func.isRequired,
}

export default LogoutBtn
