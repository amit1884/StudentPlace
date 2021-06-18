import React ,{useContext}from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import fire from '../config/firebase.config'
import {UserContext} from '../App'
import profile from '../assets/images/user.png'
function Header() {
    const {state}=useContext(UserContext)
    console.log(state)
    const handleLogout=()=>{
        localStorage.clear()
        fire
        .auth()
        .signOut()
        
    }
    return (
        <div className="header-container" id="header">
            <Link to ="/" className="logo-wrapper" style={{textDecoration:'none'}}>
                <img src={logo} alt="" className="logo-img"/><span className="logo-text">MISSIONED</span>
            </Link>
            <div className="login-btn-container">
                <Link to ="/profile">
                    <img src ={profile} alt="" style={{width:'30px',marginRight:'20px',textDecoration:'none'}}/>
                </Link>
                <button className="btn btn-danger login-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Header
