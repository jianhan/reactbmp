import React from 'react'
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
                                <span className="left-menu-title">Collapse Menu</span>
                            </a>
                        </li>
                    </ul>

                    <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">YOUR ACCOUNT</h6>
                    </div>

                    <ul className="account-settings">
                        <li>
                            <a href="03-Newsfeed.html#">

                                <svg className="olymp-menu-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
                                </svg>

                                <span>Profile Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html#">
                                <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip"
                                     data-placement="right"
                                     data-original-title="FAV PAGE">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use>
                                </svg>

                                <span>Create Fav Page</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html#">
                                <svg className="olymp-logout-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-logout-icon"></use>
                                </svg>

                                <span>Log Out</span>
                            </a>
                        </li>
                    </ul>

                    <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">About Olympus</h6>
                    </div>

                    <ul className="about-olympus">
                        <li>
                            <a href="03-Newsfeed.html#">
                                <span>Terms and Conditions</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html#">
                                <span>FAQs</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html#">
                                <span>Careers</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html#">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    }
}

