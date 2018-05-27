import React from 'react'
import AuthorThumb from './AuthorThumb'

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
                <AuthorThumb/>
            </div>

        </header>
    }

}
