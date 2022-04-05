import React, { ChangeEvent, KeyboardEvent } from 'react'
type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
    const inputClass = 'error'// need to fix with (?:)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }
    return (
        <div className='greeting' >
            <input value={name} onKeyPress={onKeyPressHandler} onChange={setNameCallback} className={error ? inputClass : ''} />
            {error && <span className='error'>{error}</span>}
            <button className='button' onClick={addUser}>add</button>
            <span className='greeting__count'>{totalUsers}</span>
        </div>
    )
}

export default Greeting
