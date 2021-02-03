/* eslint-disable react/no-array-index-key */
import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {uniqueId} from "lodash"

import {Spin} from "antd"

import Ticket from '../../Components/Ticket'

import checkboxFilter from '../../Tools/checkboxFilter'

import filterTicket from '../../Tools/filterTicket'

import './TicketList.css'

import 'antd/dist/antd.css';

const TicketList = ({error, tickets, theMostCheapBool, theMostFastBool, loader, loaderFalse }) => {
    if (error) return <p>OOops!!! We have some problems, srry!!!</p>
    if (!loader && tickets.length === 0) {
        return (
            <div className="ticketList">
                <p className="noTickets">Рейсов нет, но вы держитесь!!!</p>
            </div>
        )
    }
    if (loader && tickets.length !== 0) {
        loaderFalse();
    }

    if (!loader && tickets.length !== 0) {
        return (
            <ul className="ticketList">
                {tickets
                    .filter((item, index, arr) => filterTicket(item, arr, theMostCheapBool, theMostFastBool))
                    .map((ticket) => (
                        <Ticket logo={ticket.carrier} price={ticket.price} key={uniqueId()} segments={ticket.segments} />
                    ))}
            </ul>
        )
    }
    return <div className = "loader"><Spin size = "large" wrapperClassName = "loader"/></div>


}

TicketList.defaultProps = {
    tickets: [],
    theMostFastBool: true,
    theMostCheapBool: false,
    loader: true,
    loaderFalse: () => {},
    error: false,
}

TicketList.propTypes = {
    tickets: PropTypes.instanceOf(Array),
    theMostFastBool: PropTypes.bool,
    theMostCheapBool: PropTypes.bool,
    loader: PropTypes.bool,
    loaderFalse: PropTypes.func,
    error: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    tickets: state.tickets.filter((item) =>
        checkboxFilter(item, [state.withoutSeg, state.oneSeg, state.twoSeg, state.threeSeg, state.allTickets])
    ),
    theMostCheapBool: state.theMostCheapBool,
    theMostFastBool: state.theMostFastBool,
    loader: state.loading,
})
const mapDispatchToProps = (dispatch) => ({
    loaderFalse: () => dispatch({ type: 'loaderFalse' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
