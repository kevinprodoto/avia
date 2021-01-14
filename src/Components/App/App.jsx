import React from "react";

import PropTypes from "prop-types";

import TicketList from "../../Containers/TicketList";

import AppHeader from "../AppHeader";

import "./App.css";

const App = ({tickets, loading}) => {

    const checkLoad = () => {
        if (loading) {
            return <p className = "load">Loading...</p>
        }
        return <TicketList tickets = {tickets} loading = {loading}/>
    }

    return <section className = "Avia">
        <div className ="filters">
            <form>
                <p>Количество пересадок</p>
                <label className = "check">
                    <input type = "checkbox" value = "all"/>
                    <span className = "check__box"></span>
                    <p className = "check__text">Все</p>
                </label>
                <label className = "check">
                    <input type = "checkbox" value = "0" />
                    <span className = "check__box"></span>
                    <p className = "check__text">Без пересадок</p>
                </label>
                <label className = "check">
                    <input type = "checkbox" value = "1" />
                    <span className = "check__box"></span>
                    <p className = "check__text">1 Пересадка</p>
                </label>
                <label className = "check">
                    <input type = "checkbox" value = "2" />
                    <span className = "check__box"></span>
                    <p className = "check__text">2 Пересадки</p>
                </label>
                <label className = "check">
                    <input type = "checkbox" value = "3"/>
                    <span className = "check__box"></span>
                    <p className = "check__text">3 Пересадки</p>
                </label>
            </form>
        </div>
        <div>
            <AppHeader />
            {checkLoad()}
        </div>
    </section> 
}
App.defaultProps = {
    tickets: [],
    loading: true,
}
  
  App.propTypes = {
    tickets: PropTypes.instanceOf(Array),
    loading: PropTypes.bool,
}
export default App;