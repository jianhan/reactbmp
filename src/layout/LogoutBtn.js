import React from 'react'
import PropTypes from 'prop-types'

const LogoutBtn = ({doUserLogout}) => (
    <a href="" onClick={e => {
        e.preventDefault()
        doUserLogout()
    }}>Logout</a>
)

LogoutBtn.propTypes = {
    doUserLogout: PropTypes.func.isRequired,
}

export default LogoutBtn
