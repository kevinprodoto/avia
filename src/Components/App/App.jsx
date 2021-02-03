/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react'

import { createStore, applyMiddleware, compose } from 'redux'

import reduxThunk from "redux-thunk"

import { Provider } from 'react-redux'

import PropTypes from 'prop-types'

import reducer from '../../Tools/reducer'

import TicketList from '../../Containers/TicketList'

import Header from '../Header'

import Filters from '../Filters'

import './App.css'

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const App = ({ tickets, error }) => {



    const loggerMiddleware = store => next => action => {
        const result = next(action)
        return result
    } 

    const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)))
    store.dispatch({
        type: 'getTickets',
        tickets,
    })

    const update = () => (
        <Provider store={store}>
            <section className="Avia">
                <Filters />
                <div>
                    <Header />
                    <TicketList error = {error} />
                </div>
            </section>
        </Provider>
    )
    store.subscribe(update)
    return update()
}
App.defaultProps = {
    tickets: [],
}

App.propTypes = {
    tickets: PropTypes.instanceOf(Array),
}
export default App
