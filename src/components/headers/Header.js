import React, { useState, useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom'

function Header() {
    const value = useContext(GlobalState)
    return (
        <header>
            <ul>
                <li><Link to="/">Events</Link></li>
                <li><Link to="/login">Login + Register</Link></li>
            </ul>

        </header>
    )
}

export default Header