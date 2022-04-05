import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { restoreState, saveState } from './localStorage/localStorage'
import s from './HW6.module.scss'
function HW6() {
    const [value, setValue] = useState<string>('')
    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', ''))
    }
    return (
        <div className='wrapper'>
            <h3 className='subtitle'>homeworks 6</h3>
            <div className={s.text}>
                <SuperEditableSpan
                    spanClassName={s.span}
                    value={value}
                    onChangeText={setValue}
                    spanProps={{ children: value ? undefined : 'enter text...' }}
                />
            </div>
            <SuperButton className={s.button} onClick={save}>save</SuperButton>
            <SuperButton className={s.button} onClick={restore}>restore</SuperButton>
        </div>
    )
}

export default HW6
