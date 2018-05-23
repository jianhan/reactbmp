import React from 'react'

export default class SideBarParent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {open: false}
        this.toggle = this.toggle.bind(this)
    }

    toggle(e) {
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })
    }
}