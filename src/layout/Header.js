import React from 'react'

export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <header className="header" id="site-header">

            <div className="page-title">
                <h6>Newsfeed</h6>
            </div>

            <div className="header-content-wrapper">
                <form className="search-bar w-search notification-list friend-requests">
                    <div className="form-group with-button">
                        <input className="form-control js-user-search" placeholder="Search here people or pages..."
                               type="text"/>
                        <button>
                            <svg className="olymp-magnifying-glass-icon">
                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"/>
                            </svg>
                        </button>
                    </div>
                </form>

                <div className="control-block">

                    <div className="author-page author vcard inline-items more">
                        <div className="author-thumb">
                            <img alt="author" src="img/author-page.jpg" className="avatar"/>
                            <span className="icon-status online"></span>
                            <div className="more-dropdown more-with-triangle">
                                <div className="mCustomScrollbar" data-mcs-theme="dark">
                                    <div className="ui-block-title ui-block-title-small">
                                        <h6 className="title">Your Account</h6>
                                    </div>

                                    <ul className="account-settings">
                                        <li>
                                            <a href="29-YourAccount-AccountSettings.html">

                                                <svg className="olymp-menu-icon">
                                                    <use
                                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
                                                </svg>

                                                <span>Profile Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="36-FavPage-SettingsAndCreatePopup.html">
                                                <svg className="olymp-star-icon left-menu-icon"
                                                     data-toggle="tooltip"
                                                     data-placement="right" data-original-title="FAV PAGE">
                                                    <use
                                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use>
                                                </svg>

                                                <span>Create Fav Page</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="03-Newsfeed.html#">
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
            </div>

        </header>
    }

}
