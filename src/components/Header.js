import React ,{useContext}from 'react'
import logo from '../assets/images/logo.svg'
import fire from '../config/firebase.config'
import {UserContext} from '../App'
function Header() {
    const {state}=useContext(UserContext)
    console.log(state)
    const handleLogout=()=>{
        console.log('logout clicked')
        fire
        .auth()
        .signOut()
    }
    return (
        <div className="header-container" id="header">
            <div className="logo-wrapper">
                <img src={logo} alt="" className="logo-img"/><span className="logo-text">MISSIONED</span>
            </div>
            <div className="login-btn-container">
                <button className="btn btn-danger login-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Header
