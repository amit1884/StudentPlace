import React, {useState,useContext}from 'react'
import swal from 'sweetalert'
import firebase from 'firebase'
import logo from '../../assets/images/logo.svg'
import {UserContext} from '../../App'
import {useHistory} from 'react-router-dom'
import Spinner from '../Spinner'
function AdditionalInfoForm() {
    const {state}=useContext(UserContext)
    const history=useHistory()
    const id=state?.id
    const [fullName,setFullName]=useState('')
    const [college,setCollege]=useState('')
    const [branch,setBranch]=useState('')
    const [mobile,setMobile]=useState('')
    const [address,setAddress]=useState('')
    const [loading,setLoading]=useState(false)
    const AdditionalInfo=(e)=>{
        e.preventDefault();
        setLoading(true)
        if(id!==''){
            firebase.firestore().collection('users').add({
                user_id:id,
                name: fullName,
                mobile:mobile,
                branch:branch,
                college:college,
                address:address,
                cart:[],
                orders:[],
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
              })
              .then(saveduser=>{
                  console.log(saveduser)
                  setLoading(false)
                  history.push('/')
              })
              .catch(function(error) {
                
                swal({
                    title:'Some error occurred',
                    icon:'warning'
                })
              })
        }
    }
    return (
        <div className="addition-info-container">
            <div className="auth-form-container">
        <div className="auth_main_wrapper d-flex align-items-center justify-content-center flex-direction-column">
            <div className="mb-10 mt-20">
                <img src ={logo} alt=""/>
            </div>
            <div className="mb-10 mt-20 text-heading">
                <p>Please provide your details</p>
            </div>
        <form onSubmit={AdditionalInfo} className="auth-form d-flex align-items-center justify-content-center flex-direction-column">
            <div className="d-flex align-items-center justify-content-center flex-direction-column">
            <input type="name" placeholder="Full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)} className="auth_input"/>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-direction-column">
            <input type="text" placeholder="University/College" value={college} onChange={(e)=>setCollege(e.target.value)} className="auth_input"/>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-direction-column">
            <input type="text" placeholder="Branch" value={branch} onChange={(e)=>setBranch(e.target.value)} className="auth_input"/>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-direction-column">
            <input type="text" placeholder="Mobile No." value={mobile} onChange={(e)=>setMobile(e.target.value)} className="auth_input"/>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-direction-column">
            <input type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} className="auth_input"/>
            </div>
            <button type="submit" className="auth_btn mt-10 cursor-pointer cursor-pointer d-flex justify-content-center align-items-center">
                {
                    loading?
                    <Spinner width="25px" height="25px"/>
                    :'Submit'
                }
            </button>
        </form>
        </div>
    </div>
        </div>
    )
}

export default AdditionalInfoForm
