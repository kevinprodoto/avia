import React, { Component } from 'react'

import App from '../../Components/App'

import getReq from '../../Services/uniRequest'

export default class AppContainer extends Component {
    state = {
        loading: true,
    }

    async componentDidMount() {
        try {
            await this.localId()
            const tickets = await getReq('tickets', localStorage.getItem('id'))
            this.setState(() => ({
                tickets: tickets.tickets,
            }))
        } catch(err) {
            this.setState(() => ({
                error: true,
            }))
        }

    }

    localId = async () => {
        if (!localStorage.getItem('id')) {
            const id = await getReq('id')
            localStorage.setItem('id', id.searchId)
        }
    }

    render() {
        const { tickets, loading, error } = this.state
        return <App error={error} tickets={tickets} loading={loading} />
    }
}
