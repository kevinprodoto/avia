import React from "react";

import PropTypes from "prop-types";

import Ticket from "../../Components/Ticket";

import "./TicketList.css";

const TicketList = ({tickets}) => {

    let key = 1;

    const keyGen = () => {
        const res = key + 1;
        key = res;
        return res;
    }

    return (<ul className = "ticketList">
        {tickets.map(ticket => {
            return <Ticket logo = {ticket.carrier}
                    price = {ticket.price}
                    key = {keyGen()}
                    segments = {ticket.segments}/>
        })}
    </ul>)
}

TicketList.defaultProps = {
    tickets: [],

}
  
TicketList.propTypes = {
    tickets: PropTypes.instanceOf(Array),
}

export default TicketList;