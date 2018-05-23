import React from 'react'

export default class HeaderResponsive extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <header className="header header-responsive" id="site-header-responsive">
            <div className="header-content-wrapper">
                <ul className="nav nav-tabs mobile-app-tabs" role="tablist">

                </ul>
            </div>
            {/* Tab panes */}
            {/* end Tab panes */}
        </header>
    }
}