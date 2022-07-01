import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useAppDispatch } from "../h10/bll/store"

import { useAppSelector } from "../h10/bll/store"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import { changeCheckAC, getResponseTC } from "./RequestsAPI"

export const Request = () => {
    const state = useAppSelector(state => state.h13_state)
    const dispatch = useAppDispatch()
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCheckAC(e.currentTarget.checked))
    }
    const getMess = () => {
        dispatch(getResponseTC(state.isChecked))
    }
    const style = { border: '1px solid black', maxWidth: 'fit-content', padding: '10px', marginBottom: '10px' }
    return (
        <div className="wrapper">
            <div className="subtitle">homeworks 13</div>
            <div>
                <input checked={state.isChecked} onChange={changeValue} type="checkbox" />
            </div>
            <div style={{ margin: '10px 0' }}>
                <SuperButton onClick={getMess}>Button</SuperButton>
            </div>
            {!!state.errorText && <div style={style}>
                {state.errorText}
            </div>}
            {!!state.info && <div style={style}>
                {state.info}
            </div>}
        </div>
    )
}