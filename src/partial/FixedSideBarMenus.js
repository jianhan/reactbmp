import React from 'react'

export default class FixedSideBarMenus extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className="mCustomScrollbar" data-mcs-theme="dark">
            <ul className="left-menu">
                <li>
                    <a href="#" className="js-sidebar-open" onClick={this.toggle}>
                        <svg className="olymp-menu-icon left-menu-icon" data-toggle="tooltip"
                             data-placement="right"
                             data-original-title="OPEN MENU">
                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
                        </svg>
                        <span className="left-menu-title">Close</span>
                    </a>
                </li>
                <li>
                    <Link to="/auth">
                        <svg className="olymp-newsfeed-icon left-menu-icon"
                             data-toggle="tooltip"
                             data-placement="right"
                             data-original-title="Authenticate">
                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use>
                        </svg>
                        <span className="left-menu-title">Login</span>
                    </Link>
                </li>
            </ul>
        </div>
    }
}