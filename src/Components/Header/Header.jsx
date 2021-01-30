import React from 'react'

import { connect } from 'react-redux'

import { PropTypes } from 'prop-types'

import logo from '../../Images/Logo.svg'

import getClass from '../../Tools/getClass'

import './Header.css'

const Header = ({ theMostCheapBool, theMostFastBool, fromCheapToFast, fromFastToCheap }) => (
    <header className="Header">
        <button className="header__logo" onClick={() => window.location.reload()} type="button">
            <img src={logo} alt="icon" />
        </button>
        <div className="header__buttons">
            <button className={getClass(theMostFastBool)} onClick={fromCheapToFast} type="button">
                Самый Быстрый
            </button>
            <button className={getClass(theMostCheapBool)} onClick={fromFastToCheap} type="button">
                Самый Дешёвый
            </button>
        </div>
    </header>
)

Header.defaultProps = {
    theMostFastBool: true,
    theMostCheapBool: false,
    fromCheapToFast: () => {},
    fromFastToCheap: () => {},
    // allClear: () => {},
}

Header.propTypes = {
    theMostFastBool: PropTypes.bool,
    theMostCheapBool: PropTypes.bool,
    fromFastToCheap: PropTypes.func,
    fromCheapToFast: PropTypes.func,
    //  allClear: PropTypes.func,
}

const mapStateToProps = (state) => ({
    theMostCheapBool: state.theMostCheapBool,
    theMostFastBool: state.theMostFastBool,
})

const mapDispatchToProps = (dispatch) => ({
    fromCheapToFast: () => dispatch({ type: 'fromCheapToFast' }),
    fromFastToCheap: () => dispatch({ type: 'fromFastToCheap' }),
    allClear: () => dispatch({ type: 'allClear' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
