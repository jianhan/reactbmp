import React from 'react'
import {connect} from 'react-redux'
import {userActions} from '../_actions/user'
import PropTypes from 'prop-types'
import history from '../_common/history'
import _ from 'lodash'

class AuthorThumb extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let content = ''
        if (!_.isUndefined(this.props.user) && !_.isNull(this.props.user)) {
            content = (
                <div className="control-block">
                    <div className="author-page author vcard inline-items more">
                        <div className="author-thumb">
                            <img alt="author" src={this.props.user.avatar} className="avatar"
                                 style={{'maxWidth': '30px'}}/>
                            <span className="icon-status online"></span>
                            <div className="more-dropdown more-with-triangle">
                                <div className="mCustomScrollbar" data-mcs-theme="dark">
                                    <div className="ui-block-title ui-block-title-small">
                                        <h6 className="title">Your Account</h6>
                                    </div>
                                    <ul className="account-settings">
                                        <li>
                                            <a onClick={this.props.onLogoutClick}>
                                                <svg className="olymp-logout-icon">
                                                    <use
                                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-logout-icon"></use>
                                                </svg>
                                                <span>Log Out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a className="author-name fn" onClick={this.props.onLogoutClick}>
                            <div className="author-title">
                                {this.props.user.name}
                                <svg className="olymp-dropdown-arrow-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                </svg>
                            </div>
                            <span className="author-subtitle">{this.props.user.email}</span>
                        </a>
                    </div>
                </div>
            )
        }

        return content
    }
}

AuthorThumb.propTypes = {
    onLogoutClick: PropTypes.func.isRequired
}

const mapSateToProps = state => ({
    user: state.auth.user,
})


const mapDispatchToProps = dispatch => {
    return {
        onLogoutClick: (e) => {
            e.preventDefault()
            dispatch(userActions.logout())
            history.push('/')
        }
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(AuthorThumb)
