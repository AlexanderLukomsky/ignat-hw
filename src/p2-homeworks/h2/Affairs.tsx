import React from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('all') } // need to fix
    const setHigh = () => { props.setFilter('high') }
    const setMiddle = () => { props.setFilter('middle') }
    const setLow = () => { props.setFilter('low') }
    const activeClass = (filter: FilterType) => {
        return filter === props.filter ? 'active' : ''
    }
    return (
        <div className='affairs' >
            <div className='affairs__items'>
                {mappedAffairs}
            </div>
            <div className='affairs__footer'>
                <button className={`button ${activeClass('all')}`} onClick={setAll}>All</button>
                <button className={`button ${activeClass('high')}`} onClick={setHigh}>High</button>
                <button className={`button ${activeClass('middle')}`} onClick={setMiddle}>Middle</button>
                <button className={`button ${activeClass('low')}`} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
