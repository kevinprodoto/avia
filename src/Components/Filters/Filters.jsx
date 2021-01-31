import React from 'react'

import { connect } from 'react-redux'

import { PropTypes } from 'prop-types'

import getClass from '../../Tools/getClass'

import './Filters.css'

const Filters = ({ state, allCheckbox, seg }) => (
    <div className="filters">
        <form>
            <p>Количество пересадок</p>
            <label className="check">
                <input onClick={allCheckbox} type="checkbox" value="all" />
                <span className={`check__box ${getClass(state.allTickets, 'checked')}`}></span>
                <p className="check__text">Все</p>
            </label>
            <label className="check">
                <input onClick={seg} type="checkbox" value="withoutSeg" />
                <span className={`check__box ${getClass(state.withoutSeg, 'checked')}`}></span>
                <p className="check__text">Без пересадок</p>
            </label>
            <label className="check">
                <input onClick={seg} type="checkbox" value="oneSeg" />
                <span className={`check__box ${getClass(state.oneSeg, 'checked')}`}></span>
                <p className="check__text">1 Пересадка</p>
            </label>
            <label className="check">
                <input onClick={seg} type="checkbox" value="twoSeg" />
                <span className={`check__box ${getClass(state.twoSeg, 'checked')}`}></span>
                <p className="check__text">2 Пересадки</p>
            </label>
            <label className="check">
                <input onClick={seg} type="checkbox" value="threeSeg" />
                <span className={`check__box ${getClass(state.threeSeg, 'checked')}`}></span>
                <p className="check__text">3 Пересадки</p>
            </label>
        </form>
    </div>
)

Filters.defaultProps = {
    allCheckbox: () => {},
    state: {},
    seg: () => {},
}

Filters.propTypes = {
    state: PropTypes.instanceOf(Object),
    allCheckbox: PropTypes.func,
    seg: PropTypes.func,
}

const mapStateToProps = (state) => ({
    state,
})

const mapDispatchToProps = (dispatch) => ({
    allCheckbox: () => dispatch({ type: 'allCheckboxes' }),
    seg: (evv) => dispatch({ type: 'seg', value: evv.target.defaultValue }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
