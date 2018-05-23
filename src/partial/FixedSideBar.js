import React from 'react';

export default class FixedSideBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {open: false}
        this.openCloseClicked = this.openCloseClicked.bind(this)
    }

    openCloseClicked(e) {
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return <div className={["fixed-sidebar", this.state.open ? "open" : ""].join(' ')}>
            <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
                <a href="02-ProfilePage.html" className="logo">
                    <div className="img-wrap">
                        <img src="img/logo.png" alt="Olympus"/>
                    </div>
                </a>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="left-menu">
                        <li>
                            <a href="03-Newsfeed.html#" className="js-sidebar-open" onClick={this.openCloseClicked}>
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
                            <a href="03-Newsfeed.html#" className="js-sidebar-open" onClick={this.openCloseClicked}>
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

                    <div className="profile-completion">

                        <div className="skills-item">
                            <div className="skills-item-info">
                                <span className="skills-item-title">Profile Completion</span>
                                <span className="skills-item-count"><span className="count-animate" data-speed="1000"
                                                                          data-refresh-interval="50" data-to="76"
                                                                          data-from="0"></span><span
                                    className="units">76%</span></span>
                            </div>
                            <div className="skills-item-meter">
                                <span className="skills-item-meter-active bg-primary" style={{width: '76%'}}></span>
                            </div>
                        </div>

                        <span>Complete <a
                            href="03-Newsfeed.html#">your profile</a> so people can know more about you!</span>

                    </div>
                </div>
            </div>
        </div>
    }
}