import React from 'react'
import PropTypes from 'prop-types'

const LogoutBtn = ({onClick}) => {
    return (
        <a href="" onClick={e => {
            e.preventDefault()
            onClick()
        }}>Logout</a>
    )
}

LogoutBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default LogoutBtn
