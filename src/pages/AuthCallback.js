import React from 'react'

const AuthCallback = ({match}) => (
    <div>
        <h3>ID: {match.params.name}</h3>
    </div>
);

export default AuthCallback
