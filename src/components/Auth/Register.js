import React ,{useState}from 'react'
import swal from 'sweetalert'
import fire from '../../config/firebase.config'
import logo from '../../assets/images/logo.svg'
import {useHistory} from 'react-router-dom'
function Register({setHasAccount}) {
    const history =useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const handleRegister=(e)=>{

        e.preventDefault();
        if(password===confirmPassword)
        {
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(user=>{
            if(user){
                history.push('/additional_info')
            }
        })
        .catch(err=>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    swal({
                        title:err.message,
                        icon:'warning'
                    })
                    break;
                case "auth/weak-password":
                    swal({
                        title:err.message,
                        icon:'warning'
                    })
                    break;
            }
        })
    }
    else{
        swal({
            title:'Passwords Mismatched',
            icon:'warning'
        })
    }
    }
    return (
        <div className="auth-form-container">
        <div className="auth_main_wrapper d-flex align-items-center justify-content-center flex-direction-column">
            <div className="mb-10 mt-20">
                <img src ={logo} alt=""/>
            </div>
            <div className="mb-10 mt-20 text-heading">
                <p>Sign up</p>
            </div>
        <form onSubmit={handleRegister} className="auth-form d-flex align-items-center justify-content-center flex-direction-column">
            <div className="d-flex align-items-center justify-content-center flex-direction-column">
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="auth_input"/>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-direction-column">
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="auth_input"/>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-direction-column">
            <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="auth_input"/>
            </div>
            <button type="submit" className="auth_btn mt-10">Sign Up</button>
        </form>
        <p onClick={()=>setHasAccount(true)} style={{fontSize:'25px',color:'gray',cursor:'pointer'}}>&#8592;&nbsp;&nbsp;back to Log-in</p>
        </div>
    </div>
    )
}

export default Register
