import React from 'react'
import {Link} from "react-router-dom"
import FixedSidebarParent from './FixedSideBarParent'

export default class FixedSideBar extends FixedSidebarParent {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className={["fixed-sidebar", this.state.open ? "open" : ""].join(' ')}>
            <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
                <Link to="/" href="#" className="logo">
                    <div className="img-wrap">
                        <img src="img/logo.png" alt="Olympus"/>
                    </div>
                </Link>
                <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="left-menu">
                        <li>
                            <a href="#" className="js-sidebar-open" onClick={this.toggle}>
                                <i className="fas fa-align-justify fa-2x"></i>
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
            </div>

            <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
                <a href="02-ProfilePage.html" className="logo">
                    <div className="img-wrap">
                        <img src="img/logo.png" alt="Olympus"/>
                    </div>
                    <div className="title-block">
                        <h6 className="logo-title">olympus</h6>
                    </div>
                </a>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
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
            </div>
        </div>
    }
}
