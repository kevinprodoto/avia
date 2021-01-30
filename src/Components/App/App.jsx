import React from 'react'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import PropTypes from 'prop-types'

import reducer from '../../Tools/reducer'

import TicketList from '../../Containers/TicketList'

import Header from '../Header'

import Filters from '../Filters'

import theMost from '../../Tools/theMost'

import './App.css'

const App = ({ tickets, loading }) => {
    const store = createStore(reducer)
    store.dispatch({
        type: 'getTickets',
        tickets,
        theMostFast: theMost(tickets, 'time'),
        theMostCheap: theMost(tickets, 'cheap'),
    })
    const checkLoad = () => {
        if (loading) {
            return <p className="load">Loading...</p>
        }
        return <TicketList />
    }

    const update = () => (
        <Provider store={store}>
            <section className="Avia">
                <Filters />
                <div>
                    <Header />
                    {checkLoad()}
                </div>
            </section>
        </Provider>
    )
    store.subscribe(update)
    return update()
}
App.defaultProps = {
    tickets: [],
    loading: true,
}

App.propTypes = {
    tickets: PropTypes.instanceOf(Array),
    loading: PropTypes.bool,
}
export default App
