import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Ticket from '../../Components/Ticket'

import filterTicket from '../../Tools/filterTicket'

import './TicketList.css'

const TicketList = ({ tickets }) => {
    let key = 1

    const keyGen = () => {
        const res = key + 1
        key = res
        return res
    }
    return (
        <ul className="ticketList">
            {tickets.map((ticket) => (
                <Ticket logo={ticket.carrier} price={ticket.price} key={keyGen()} segments={ticket.segments} />
            ))}
        </ul>
    )
}

TicketList.defaultProps = {
    tickets: [],
}

TicketList.propTypes = {
    tickets: PropTypes.instanceOf(Array),
}

const mapStateToProps = (state) => ({
    tickets: state.tickets.filter((item) =>
        filterTicket(
            item,
            state.theMostCheapBool,
            state.theMostFastBool,
            state.theMostCheap,
            state.theMostFast,
            state.withoutSeg,
            state.oneSeg,
            state.twoSeg,
            state.threeSeg
        )
    ),
})

export default connect(mapStateToProps)(TicketList)
