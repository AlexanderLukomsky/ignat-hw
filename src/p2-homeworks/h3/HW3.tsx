import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, { _id: v1(), name }]) // need to fix
    }

    return (
        <div className='wrapper'>
            <h3 className='subtitle'>
                homeworks 3
            </h3>
            <GreetingContainer users={users} addUserCallback={addUserCallback} />
        </div>
    )
}

export default HW3
