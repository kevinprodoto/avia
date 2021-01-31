/* eslint-disable react/no-array-index-key */
import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Ticket from '../../Components/Ticket'

import checkboxFilter from '../../Tools/checkboxFilter'

import filterTicket from '../../Tools/filterTicket'

import './TicketList.css'

const TicketList = ({ tickets, theMostCheapBool, theMostFastBool, loader }) => {
    if (loader) return <p>Loading...</p>
    if (tickets.length === 0) {
        return (
            <div className="ticketList">
                <p className="noTickets">Рейсов, подходящих под заданные фильтры, не найдено</p>
            </div>
        )
    }

    return (
        <ul className="ticketList">
            {tickets
                .filter((item, index, arr) => filterTicket(item, arr, theMostCheapBool, theMostFastBool))
                .map((ticket) => (
                    <Ticket logo={ticket.carrier} price={ticket.price} key={ticket.price} segments={ticket.segments} />
                ))}
        </ul>
    )
}

TicketList.defaultProps = {
    tickets: [],
    theMostFastBool: true,
    theMostCheapBool: false,
    loader: true,
}

TicketList.propTypes = {
    tickets: PropTypes.instanceOf(Array),
    theMostFastBool: PropTypes.bool,
    theMostCheapBool: PropTypes.bool,
    loader: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    tickets: state.tickets.filter((item) =>
        checkboxFilter(item, [state.withoutSeg, state.oneSeg, state.twoSeg, state.threeSeg, state.allTickets])
    ),
    theMostCheapBool: state.theMostCheapBool,
    theMostFastBool: state.theMostFastBool,
    loader: state.loading,
})

export default connect(mapStateToProps)(TicketList)
