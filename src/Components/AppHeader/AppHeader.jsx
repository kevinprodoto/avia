import React from "react";

import logo from "../../Images/Logo.svg";

import "./AppHeader.css"


const Appheader = () => {

    return <header className = "appHeader">
        <img src = {logo} alt = "icon" />
        <div className = "buttons">
            <button type = "button">Самый Быстрый</button>
            <button type = "button">Самый Дешёвый</button>
        </div>
    </header>
}

export default Appheader;