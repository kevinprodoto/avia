import React, { Component } from 'react'

import App from '../../Components/App'

import getReq from '../../Services/uniRequest'

export default class AppContainer extends Component {
    state = {
        tickets: [],
        loading: true,
    }

    async componentDidMount() {
        await this.localId()
        const tickets = await getReq('tickets', localStorage.getItem('id'))
        this.setState(() => ({
            tickets: tickets.tickets,
            loading: false,
        }))
    }

    localId = async () => {
        if (!localStorage.getItem('id')) {
            const id = await getReq('id')
            localStorage.setItem('id', id.searchId)
        }
    }

    render() {
        const { tickets, loading } = this.state
        return <App tickets={tickets} loading={loading} />
    }
}
