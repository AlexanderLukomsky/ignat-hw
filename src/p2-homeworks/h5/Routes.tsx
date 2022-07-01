import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HW1 from '../h1/HW1'
import HW10 from '../h10/HW10'
import HW11 from '../h11/HW11'
import HW12 from '../h12/HW12'
import HW2 from '../h2/HW2'
import HW3 from '../h3/HW3'
import HW4 from '../h4/HW4'
import HW6 from '../h6/HW6'
import HW7 from '../h7/HW7'
import HW8 from '../h8/HW8'
import HW9 from '../h9/HW9'
import { HW13 } from '../hw13/HW13'
import Error404 from './pages/Error404'
import { Junior } from './pages/Junior'
import { JuniorPlus } from './pages/Junior-Plus'
import PreJunior from './pages/PreJunior'


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    HW_1: '/hw1',
    HW_2: '/hw2',
    HW_3: '/hw3',
    HW_4: '/hw4',
    HW_6: '/hw6',
    HW_7: '/hw7',
    HW_8: '/hw8',
    HW_9: '/hw9',
    HW_10: '/hw10',
    HW_11: '/hw11',
    HW_12: '/hw12',
    HW_13: '/hw13',
}

function Routes1() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate replace to={PATH.PRE_JUNIOR} />} />
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
                <Route path={PATH.HW_1} element={<HW1 />} />
                <Route path={PATH.HW_2} element={<HW2 />} />
                <Route path={PATH.HW_3} element={<HW3 />} />
                <Route path={PATH.HW_4} element={<HW4 />} />
                <Route path={PATH.HW_6} element={<HW6 />} />
                <Route path={PATH.HW_7} element={<HW7 />} />
                <Route path={PATH.HW_8} element={<HW8 />} />
                <Route path={PATH.HW_9} element={<HW9 />} />
                <Route path={PATH.HW_10} element={<HW10 />} />
                <Route path={PATH.HW_11} element={<HW11 />} />
                <Route path={PATH.HW_12} element={<HW12 />} />
                <Route path={PATH.HW_13} element={<HW13 />} />
                <Route path={'404'} element={<Error404 />} />
                <Route path='*' element={<Navigate replace to={'404'} />} />
                <Route path={PATH.JUNIOR} element={<Junior />} />
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />
            </Routes>
        </div>
    )
}

export default Routes1
