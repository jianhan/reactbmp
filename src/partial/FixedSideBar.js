import React from 'react'
import {Link} from "react-router-dom";
import FixedSidebarParent from './FixedSideBarParent'

export default class FixedSideBar extends FixedSidebarParent {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className={["fixed-sidebar", this.state.open ? "open" : ""].join(' ')}>
            <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
                <Link to="/" href="02-ProfilePage.html" className="logo">
                    <div className="img-wrap">
                        <img src="img/logo.png" alt="Olympus"/>
                    </div>
                </Link>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="left-menu">
                        <li>
                            <a href="#" className="js-sidebar-open" onClick={this.toggle}>
                                <svg className="olymp-menu-icon left-menu-icon" data-toggle="tooltip"
                                     data-placement="right"
                                     data-original-title="OPEN MENU">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html">
                                <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip"
                                     data-placement="right"
                                     data-original-title="NEWSFEED">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use>
                                </svg>
                            </a>
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
                            <a href="03-Newsfeed.html#" className="js-sidebar-open" onClick={this.toggle}>
                                <svg className="olymp-close-icon left-menu-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                                </svg>
                                <span className="left-menu-title">Collapse Menu</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html">
                                <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip"
                                     data-placement="right"
                                     data-original-title="NEWSFEED">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use>
                                </svg>
                                <span className="left-menu-title">Newsfeed</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
}
