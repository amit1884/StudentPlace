import React,{useState} from 'react'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import AuthImage from '../components/AuthImage'
function Auth() {
    const [hasAccount,setHasAccount]=useState(true)
    return (
        <div className="auth_bg d-flex justify-content-center">
           <div className="main_wrapper">
           <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
                {/* <img src ={Img} alt="" className="show_image"/> */}
                <AuthImage/>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
             {
                 hasAccount?
                 <Login setHasAccount={setHasAccount}/>
                 :
                 <Register setHasAccount={setHasAccount}/>
             }
            </div>
            </div>
           </div>
        </div>
    )
}

export default Auth
