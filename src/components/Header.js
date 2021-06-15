import React from 'react'
import logo from '../assets/images/logo.svg'

function Header() {
    return (
        <div className="header-container" id="header">
            <div className="logo-wrapper">
                <img src={logo} alt="" className="logo-img"/><span className="logo-text">MISSIONED</span>
            </div>
            <div className="login-btn-container">
                <button className="btn btn-success login-btn">Login</button>
            </div>
        </div>
    )
}

export default Header
