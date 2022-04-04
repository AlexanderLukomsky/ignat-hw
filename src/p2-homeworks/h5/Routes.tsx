import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HW1 from '../h1/HW1'
import HW2 from '../h2/HW2'
import HW3 from '../h3/HW3'
import HW4 from '../h4/HW4'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HW_1: '/hw1',
    HW_2: '/hw2',
    HW_3: '/hw3',
    HW_4: '/hw4',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
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
                <Route path={'404'} element={<Error404 />} />
                <Route path='*' element={<Navigate replace to={'404'} />} />

                <Route path={PATH.JUNIOR} element={<div>JUNIOR</div>} />
                <Route path={PATH.JUNIOR_PLUS} element={<div>JUNIOR_PLUS</div>} />
            </Routes>
        </div>
    )
}

export default Routes1
