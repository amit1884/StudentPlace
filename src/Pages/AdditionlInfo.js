import React,{useState} from 'react'
import AuthImage from '../components/AuthImage'
import AdditionalInfoForm from '../components/Auth/AdditionalInfoFrom'
function AdditionalInfo() {
    return (
        <div className="auth_bg d-flex justify-content-center">
           <div className="main_wrapper">
           <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
                {/* <img src ={Img} alt="" className="show_image"/> */}
                <AuthImage/>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
             <AdditionalInfoForm/>
            </div>
            </div>
           </div>
        </div>
    )
}

export default AdditionalInfo
