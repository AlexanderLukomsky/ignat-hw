import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'

function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const openMenu = () => { setOpen(!open) }
    const className = open ? 'open' : ''
    return (
        <div className='header'>
            <div className={`burger ${className}`} onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`navbar ${className}`}>
                <ul className='navbar__list'>
                    <li className="navbar__item"><NavLink to={PATH.PRE_JUNIOR} >pre junior</NavLink></li>
                    <li className="navbar__item"><NavLink to={PATH.HW_1} >homework - 1</NavLink></li>
                    <li className="navbar__item"><NavLink to={PATH.HW_2} >homework - 2</NavLink></li>
                    <li className="navbar__item"><NavLink to={PATH.HW_3} >homework - 3</NavLink></li>
                    <li className="navbar__item"><NavLink to={PATH.HW_4} >homework - 4</NavLink></li>
                    <li className="navbar__item"><NavLink to={PATH.JUNIOR} >JUNIOR</NavLink></li>
                    <li className="navbar__item"><NavLink to={PATH.JUNIOR_PLUS} >JUNIOR_PLUS</NavLink></li>
                    <li className="navbar__item"><NavLink to={'/incorrect-path'} >404</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
