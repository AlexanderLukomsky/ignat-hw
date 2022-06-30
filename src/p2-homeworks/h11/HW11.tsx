import React, { useEffect, useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import MultiRangeSlider from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    return (
        <div className='wrapper'>
            <div className='subtitle'>homeworks 11</div>
            <div>
                <div style={{ marginLeft: '30px', fontWeight: 'bold', marginBottom: '10px' }}>{value1}</div>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    max={value2}
                />
            </div>
            <div>

                <MultiRangeSlider
                    min={0}
                    max={100}
                    value1={value1}
                    onChange={(min: number, max: number) => {
                        setValue1(min);
                        setValue2(max)
                    }

                    }
                />
            </div>
        </div>
    )
}

export default HW11
