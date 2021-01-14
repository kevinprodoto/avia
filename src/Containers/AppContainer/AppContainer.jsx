import React, {Component} from "react";

import App from "../../Components/App";

import getId from "../../Services/getId";

import getTickets from "../../Services/getTickets";

export default class AppContainer extends Component {

    state = {
        id: "",
        tickets: [],
        loading: true,
    }

    componentDidMount() {
        getId().then((res) => {
            this.setState(() => {
                return {
                    id: res.searchId,
                }
            })
        }).then(() => {
            const {id} = this.state;
            getTickets(id).then((res) => {
                this.setState(() => {
                    return {
                        tickets: res.tickets,
                        loading: false,
                    }
                })
            })
        }) 
    }

    render () {
        const {id, tickets, loading} = this.state;
        return <App id = {id}
                    tickets = {tickets}
                    loading = {loading} />
    }
}