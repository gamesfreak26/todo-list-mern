import React from 'react'
import {BrowserRouter, Link, Switch} from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
    return(
        <BrowserRouter>
            <Link to="/login" className="aLink">Login</Link>
            <Link to="/register" className="aLink">Register</Link>
            <Link to="/" className="aLink">Home</Link>
        </BrowserRouter>
    )
}

export default Nav