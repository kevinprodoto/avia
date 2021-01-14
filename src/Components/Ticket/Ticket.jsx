import React from "react";

import PropTypes from "prop-types";

import "./Ticket.css";

const Ticket = ({price, logo, segments}) => {
    return <li className = "ticket">
        <div className = "ticket__block">
            <p className = "price">{`${price} P`}</p>
            <img src = {`https://pics.avs.io/99/36/${logo}.png`} alt = "беда" />
        </div>
        {segments.map(item => {
            const countSegm = item.stops.length;
            let stopsWord = "пересадка";
            if (countSegm > 1 && countSegm < 5)  stopsWord = "пересадки";
            if (countSegm >= 5 || countSegm === 0)  stopsWord = "пересадок";
            return <div className = "ticket__block">
                <div className = "ticket__segment">
                    <p className = "grey">{`${item.origin} - ${item.destination}`}</p>
                    <p className = "grey">в пути</p>
                    <p className = "grey">{`${countSegm} ${stopsWord}`}</p>
                </div>
                <div className = "ticket__segment">
                    <p>{`${item.date.slice(11, 16)} - ${new Date(Date.parse(new Date(item.date)) + item.duration * 60 * 1000).toString().slice(16, 21)}`}</p>
                    <p>{`${Math.floor(item.duration / 60)}ч ${item.duration - (Math.floor(item.duration / 60) * 60)}м`}</p>
                    <p className = "dfg">{item.stops.join(", ")}</p>
                </div>
            </div>
        })}
    </li>
}

Ticket.defaultProps = {
    logo: "S7",
    price: 10000,
    segments: [],

}
  
Ticket.propTypes = {
    logo: PropTypes.string,
    price: PropTypes.number,
    segments: PropTypes.instanceOf(Array),
}

export default Ticket;
