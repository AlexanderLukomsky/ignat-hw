import React, { useState } from 'react'
import { homeWorkReducer, UserType } from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'



const initialPeople: UserType[] = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)
    const finalPeople: JSX.Element[] = people.map((p: UserType) => (
        <div key={p._id} className='sort__item'>
            {p.name} {p.age}
        </div>
    ))
    const sortUp = () => setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' }))
    const sortDown = () => { setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'down' })) }
    const checkAgeOver = () => { setPeople(homeWorkReducer(initialPeople, { type: 'check', payload: 18 })) }
    return (
        <div className='wrapper'>
            <h3 className="subtitle">
                homeworks 8
            </h3>
            <div className='sort__list'>
                {finalPeople}
            </div>
            <div className='sort__footer'>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAgeOver}>check 18</SuperButton></div>
            </div>
        </div>
    )
}

export default HW8
