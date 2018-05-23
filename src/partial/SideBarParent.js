import React from 'react'

export default class SideBarParent extends React.Component {

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
}