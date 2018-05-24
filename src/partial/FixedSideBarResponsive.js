import React from 'react'
import {Link} from "react-router-dom"
import FixedSidebarParent from './FixedSideBarParent'

export default class FixedSideBarResponsive extends FixedSidebarParent {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className={["fixed-sidebar", "fixed-sidebar-responsive", this.state.open ? "open" : ""].join(' ')}>
            <div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
                <a href="03-Newsfeed.html#" className="logo js-sidebar-open" onClick={this.toggle}>
                    <img src="img/logo.png" alt="Olympus"/>
                </a>
            </div>

            <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
                <a href="03-Newsfeed.html#" className="logo">
                    <div className="img-wrap">
                        <img src="img/logo.png" alt="Olympus"/>
                    </div>
                    <div className="title-block">
                        <h6 className="logo-title">olympus</h6>
                    </div>
                </a>

                <div className="mCustomScrollbar" data-mcs-theme="dark">

                    <div className="control-block">
                        <div className="author-page author vcard inline-items">
                            <div className="author-thumb">
                                <img alt="author" src="img/author-page.jpg" className="avatar"/>
                                <span className="icon-status online"></span>
                            </div>
                            <a href="02-ProfilePage.html" className="author-name fn">
                                <div className="author-title">
                                    James Spiegel
                                    <svg className="olymp-dropdown-arrow-icon">
                                        <use xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                    </svg>
                                </div>
                                <span className="author-subtitle">SPACE COWBOY</span>
                            </a>
                        </div>
                    </div>

                    <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">MAIN SECTIONS</h6>
                    </div>

                    <ul className="left-menu">
                        <li>
                            <a href="03-Newsfeed.html#" className="js-sidebar-open" onClick={this.toggle}>
                                <svg className="olymp-close-icon left-menu-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                                </svg>
                                <span className="left-menu-title">Close</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/auth" onClick={this.toggle}>
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

