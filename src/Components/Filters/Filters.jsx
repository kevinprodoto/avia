import React from 'react'

import './Filters.css'

const Filters = () => (
    <div className="filters">
        <form>
            <p>Количество пересадок</p>
            <label className="check">
                <input onClick={() => console.log('click')} type="checkbox" value="all" />
                <span className="check__box"></span>
                <p className="check__text">Все</p>
            </label>
            <label className="check">
                <input onClick={() => console.log('click')} type="checkbox" value="0" />
                <span className="check__box"></span>
                <p className="check__text">Без пересадок</p>
            </label>
            <label className="check">
                <input onClick={() => console.log('click')} type="checkbox" value="1" />
                <span className="check__box"></span>
                <p className="check__text">1 Пересадка</p>
            </label>
            <label className="check">
                <input onClick={() => console.log('click')} type="checkbox" value="2" />
                <span className="check__box"></span>
                <p className="check__text">2 Пересадки</p>
            </label>
            <label className="check">
                <input onClick={() => console.log('click')} type="checkbox" value="3" />
                <span className="check__box"></span>
                <p className="check__text">3 Пересадки</p>
            </label>
        </form>
    </div>
)

export default Filters
