import React ,{useState,useEffect,useContext}from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import avatar from '../assets/images/avatar.png'
import '../assets/styles/profile.css'
import {UserContext} from '../App'
import List from '../components/List'
import show_img from '../assets/images/reg.png'
import clgImg from '../assets/images/college.png'
import branchImg from '../assets/images/grad.png'
import phoneImg from '../assets/images/phone.png'
import emailImg from '../assets/images/email.png'
function Profile() {

    const [userData,setUserData]=useState({})
    const [active,setActive]=useState('Cart')
    const {state}=useContext(UserContext)
    useEffect(()=>{

       const data=localStorage.getItem('userData')
       let localData=JSON.parse(data)
       setUserData(localData?.additionalData);
    },[])
    return (
        <>
        <Header/>
        <div className="container mt-10">
        <div className="profile-header">
        <div className="profile-img">
        <img src={avatar} width="200" alt=""/>
        </div>
        <div className="profile-nav-info">
        <h3 className="user-name">{userData?.name?userData?.name:'Loading'}</h3>
        <div className="address">
            <p id="state" className="state">{userData?.address?userData?.address:'Loading'}</p>
            <span id="country" className="country">, India</span>
        </div>
        </div>
    </div>

    <div className="main-bd">
        <div className="left-side">
        <div className="profile-side">
            {
                userData?.college?
                <p className="mobile-no"> &nbsp;
                <img src ={clgImg} alt="" style={{width:'15px'}}/>
                &nbsp;&nbsp;&nbsp;{userData?.college}</p>
                :
                <div className="shine" style={{width:'250px',height:'10px'}}></div>
            }
            {
                userData?.branch?
                <p className="mobile-no"><img src ={branchImg} alt="" style={{width:'15px'}}/>
                &nbsp;&nbsp;&nbsp; {userData?.branch}</p>
                :
                <div className="shine" style={{width:'200px',height:'10px'}}></div>
            }
            {
                userData?.mobile?
                <p className="mobile-no"> <img src ={phoneImg} alt="" style={{width:'15px'}}/>
                &nbsp;&nbsp;&nbsp;{userData?.mobile}</p>
                :
                <div className="shine" style={{width:'190px',height:'10px'}}></div>
            }
            {
                state?.email?
                <p className="mobile-no"> <img src ={emailImg} alt="" style={{width:'15px'}}/>
                &nbsp;&nbsp;&nbsp;{state?.email}</p>
                :
                <div className="shine" style={{width:'200px',height:'10px'}}></div>
            }
            <div className="show-icon d-flex justify-content-center mt-40">
            <div className="social_btn cursor-pointer">f</div>
            <div className="social_btn cursor-pointer">in</div>
            <div className="social_btn cursor-pointer">G</div>
            </div>
        </div>

        </div>
        <div className="right-side">
            <div className="d-flex my-tabs align-items-center ">
                <div className="tabs cursor-pointer"onClick={()=>setActive('Cart')} style={active==='Cart'?{borderBottom:'2px solid red'}:{}}>Cart</div>
                <div className="tabs cursor-pointer"onClick={()=>setActive('Orders')} style={active==='Orders'?{borderBottom:'2px solid red'}:{}}>My Orders</div>
            </div>
            <div className="main_content">
                {
                    active==='Cart'?
                    <>
                    {
                        userData?.cart?.length?
                        userData?.cart?.map((item,index)=>{
                            return(
                                <List item={item} key={index}/>
                            )
                        })
                        :
                        <div className="d-flex justify-content-center align-items-center flex-direction-column" style={{height:'400px',width:'96%',boxShadow:'0 0 10px lightgray',borderRadius:'10px',margin:'20px',background:'#fff'}}>
                            <p>Cart is Empty !!</p>
                            <img src ={show_img} alt="" style={{width:'250px'}}/>
                        </div>
                    }
                    </>
                    :
                    <>
                     {
                        userData?.orders?.length?
                        userData?.orders?.map((item,index)=>{
                            return(
                                <List item={item} key={index}/>
                            )
                        })
                        :
                        <div className="d-flex justify-content-center align-items-center flex-direction-column" style={{height:'400px',width:'96%',boxShadow:'0 0 10px lightgray',borderRadius:'10px',margin:'20px',background:'#fff'}}>
                            <p>No Order History !!</p>
                            <img src ={show_img} alt="" style={{width:'250px'}}/>
                        </div>
                    }
                    </>
                }
            </div>
        </div>
    </div>
</div>
<Footer/>
</>
    )
}

export default Profile
