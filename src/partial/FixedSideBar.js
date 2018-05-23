import React from 'react';

export default class FixedSideBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div class="fixed-sidebar">
            <div class="fixed-sidebar-left sidebar--small" id="sidebar-left">

                <a href="02-ProfilePage.html" class="logo">
                    <div class="img-wrap">
                        <img src="img/logo.png" alt="Olympus"/>
                    </div>
                </a>

                <div class="mCustomScrollbar" data-mcs-theme="dark">
                    <ul class="left-menu">
                        <li>
                            <a href="03-Newsfeed.html#" class="js-sidebar-open">
                                <svg class="olymp-menu-icon left-menu-icon" data-toggle="tooltip" data-placement="right"
                                     data-original-title="OPEN MENU">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html">
                                <svg class="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip"
                                     data-placement="right"
                                     data-original-title="NEWSFEED">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
                <a href="02-ProfilePage.html" class="logo">
                    <div class="img-wrap">
                        <img src="img/logo.png" alt="Olympus"/>
                    </div>
                    <div class="title-block">
                        <h6 class="logo-title">olympus</h6>
                    </div>
                </a>

                <div class="mCustomScrollbar" data-mcs-theme="dark">
                    <ul class="left-menu">
                        <li>
                            <a href="03-Newsfeed.html#" class="js-sidebar-open">
                                <svg class="olymp-close-icon left-menu-icon">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                                </svg>
                                <span class="left-menu-title">Collapse Menu</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html">
                                <svg class="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip"
                                     data-placement="right"
                                     data-original-title="NEWSFEED">
                                    <use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use>
                                </svg>
                                <span class="left-menu-title">Newsfeed</span>
                            </a>
                        </li>
                    </ul>

                    <div class="profile-completion">

                        <div class="skills-item">
                            <div class="skills-item-info">
                                <span class="skills-item-title">Profile Completion</span>
                                <span class="skills-item-count"><span class="count-animate" data-speed="1000"
                                                                      data-refresh-interval="50" data-to="76"
                                                                      data-from="0"></span><span
                                    class="units">76%</span></span>
                            </div>
                            <div class="skills-item-meter">
                                <span class="skills-item-meter-active bg-primary" style={{width: '76%'}}></span>
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