import React ,{useState,useContext}from 'react'
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert'
import fire from '../../config/firebase.config'
import logo from '../../assets/images/logo.svg'
import {UserContext} from '../../App'
function Login({setHasAccount}) {
    const history=useHistory()
    const {dispatch}=useContext(UserContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleLogin=(e)=>{

        e.preventDefault();
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(user=>{
            console.log(user)
            let loggedInUser={
                id:user.uid,
                email:user.email,
                status:user.emailVerified,
            }
            dispatch({type:"USER",payload:loggedInUser})
            history.push('/')
        })
        .catch(err=>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    swal({
                        title:err.message,
                        icon:'warning'
                    })
                    break;
                case "auth/wrong-password":
                    swal({
                        title:err.message,
                        icon:'warning'
                    })
                    break;
            }
        })

    }
    return (
        <div className="auth-form-container">
            <div className="auth_main_wrapper d-flex align-items-center justify-content-center flex-direction-column">
                <div className="mb-10 mt-20">
                    <img src ={logo} alt=""/>
                </div>
                <div className="mb-10 mt-20 text-heading">
                    <p>Sign in</p>
                </div>
            <form onSubmit={handleLogin} className="auth-form d-flex align-items-center justify-content-center flex-direction-column">
                <div className="d-flex align-items-center justify-content-center flex-direction-column">
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="auth_input"/>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-direction-column">
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="auth_input"/>
                </div>
                <button type="submit" className="auth_btn mt-10 cursor-pointer">Login</button>
            </form>
            <p onClick={()=>setHasAccount(false)} style={{fontSize:'25px',color:'gray',cursor:'pointer'}}>Create Your Account &nbsp;&#8594;</p>
            </div>
        </div>
    )
}

export default Login
