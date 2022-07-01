import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'

function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const openMenu = () => {
        setOpen(!open)
    }
    //*
    const [section, setSection] = useState<SectionType>('pre_junior')
    type SectionType = 'pre_junior' | 'junior' | 'junior+'
    const pre_junior: JSX.Element[] = [
        <ul key='1a' className='navbar__list'>
            <li key='3a' className="navbar__item">
                <NavLink to={PATH.HW_1} >homework - 1</NavLink>
            </li>
            <li key='4a' className="navbar__item">
                <NavLink to={PATH.HW_2} >homework - 2</NavLink>
            </li>
            <li key='5a' className="navbar__item">
                <NavLink to={PATH.HW_3} >homework - 3</NavLink>
            </li>
            <li key='6a' className="navbar__item">
                <NavLink to={PATH.HW_4} >homework - 4</NavLink>
            </li>
            <li key='7a' className="navbar__item">
                <NavLink to={PATH.HW_6} >homework - 6</NavLink>
            </li>
            <li key='8a' className="navbar__item" onClick={() => setSection('junior')} style={{ borderColor: 'green', borderRadius: '10px' }}>
                <NavLink to={PATH.JUNIOR} >JUNIOR</NavLink>
            </li>
            <li key='9a' className="navbar__item" onClick={() => setSection('junior+')} style={{ borderColor: 'green', borderRadius: '10px' }}>
                <NavLink to={PATH.JUNIOR_PLUS} >JUNIOR PLUS</NavLink>
            </li>
            <li key='10a' className="navbar__item" style={{ borderColor: 'green', borderRadius: '10px' }}>
                <NavLink to={'/incorrect-path'} >404</NavLink>
            </li>
        </ul>
    ]
    const junior: JSX.Element[] = [
        <ul key={'0'} className='navbar__list'>
            <li key={'4'} className="navbar__item">
                <NavLink to={PATH.HW_7} >homework - 7</NavLink>
            </li>
            <li key={'5'} className="navbar__item">
                <NavLink to={PATH.HW_8} >homework - 8</NavLink>
            </li>
            <li key={'6'} className="navbar__item">
                <NavLink to={PATH.HW_9} >homework - 9</NavLink>
            </li>
            <li key={'7'} className="navbar__item">
                <NavLink to={PATH.HW_10} >homework - 10</NavLink>
            </li>
            <li key={'8'} className="navbar__item">
                <NavLink to={PATH.HW_11} >homework - 11</NavLink>
            </li>
            <li key={'9'} className="navbar__item">
                <NavLink to={PATH.HW_12} >homework - 12</NavLink>
            </li>
            <li key={'2'} style={{ borderColor: 'green', borderRadius: '10px' }} className="navbar__item" onClick={() => setSection('pre_junior')}>
                <NavLink to={PATH.PRE_JUNIOR} >PRE JUNIOR</NavLink>
            </li>
            <li key={'3'} className="navbar__item" style={{ borderColor: 'green', borderRadius: '10px' }} onClick={() => setSection('junior+')}>
                <NavLink to={PATH.JUNIOR_PLUS} >JUNIOR PLUS</NavLink>
            </li>
        </ul>
    ]
    const juniorPlus: JSX.Element[] = [
        <ul key='0j' className='navbar__list'>
            <li key='1j' className="navbar__item">
                <NavLink to={PATH.HW_13} >homework - 13</NavLink>
            </li>
            <li key={'j22'} style={{ borderColor: 'green', borderRadius: '10px' }} className="navbar__item" onClick={() => setSection('pre_junior')}>
                <NavLink to={PATH.PRE_JUNIOR} >PRE JUNIOR</NavLink>
            </li>
            <li key={'j33'} className="navbar__item" style={{ borderColor: 'green', borderRadius: '10px' }} onClick={() => setSection('junior')}>
                <NavLink to={PATH.JUNIOR} >JUNIOR</NavLink>
            </li>
        </ul>
    ]
    //*
    const className = open ? 'open' : ''
    return (
        <div className='header'>
            <ul style={{ display: 'flex', marginBottom: '20px' }}>
                <li style={{ marginRight: '10px', padding: '10px', border: '1px solid red' }} onClick={() => setSection('pre_junior')}>
                    <NavLink to={PATH.PRE_JUNIOR} >PRE_JUNIOR</NavLink>
                </li>
                <li style={{ marginRight: '10px', padding: '10px', border: '1px solid red' }} onClick={() => setSection('junior')}>
                    <NavLink to={PATH.JUNIOR} >JUNIOR</NavLink>
                </li>
                <li style={{ marginRight: '10px', padding: '10px', border: '1px solid red' }} onClick={() => setSection('junior+')}>
                    <NavLink to={PATH.JUNIOR_PLUS} >JUNIOR_PLUS</NavLink>
                </li>
            </ul>
            <div className={`burger ${className}`} onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`navbar ${className}`}>
                {section === 'junior' && junior}
                {section === 'pre_junior' && pre_junior}
                {section === 'junior+' && juniorPlus}
            </nav>
        </div>
    )
}

export default Header
