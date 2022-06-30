import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const seconds = date?.getSeconds().toString().length === 1 ? `0${date?.getSeconds()}` : date?.getSeconds()
    const minutes = date?.getMinutes().toString().length === 1 ? `0${date?.getMinutes()}` : date?.getMinutes()
    const hours = date?.getHours().toString().length === 1 ? `0${date?.getHours()}` : date?.getHours()
    const stringTime = date ? `${hours}:${minutes}:${seconds}` : ''
    const stringDate = date?.getDate()

    return (
        <div>
            <div>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    style={{ display: 'inline-block', border: '1px solid black', padding: '10px', width: 'fit-content', marginBottom: '10px', borderRadius: '5px', marginRight: '10px' }}
                >
                    Time:  <span style={{ fontWeight: 'bold' }}> {stringTime}</span>
                </div>
                {show && (
                    <span>
                        date today:  {stringDate}
                    </span>
                )}
            </div>



            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
