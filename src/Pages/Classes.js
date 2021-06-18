import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import Header from '../components/Header';
import ClassesHero from '../components/ClassesHero';
import Footer from '../components/Footer';
import {CollegeClasses,SchoolClasses} from '../assets/data/helper'
import swal from 'sweetalert';
function Classes() {
    const {type}=useParams();
    const [courses,setCourses]=useState([])
    useEffect(()=>{

        if (type === "college") {
            setCourses(CollegeClasses)
        }
        else if (type === 'school') {
            setCourses(SchoolClasses)
        }
    },[type])
    return (
        <>
        <Header/> 
        <ClassesHero/>
        <div className="container">
            <h1 className="text-center text-heading" data-aos="zoom-in">Available Courses</h1>
        </div>
        <div className="container">
            <div className="row">
                {
                  courses?.map((item,index)=>{
                      return(
                        <div className="col-sm-12 col-xs-12 col-md-4" >
                            <div class="card mycard" data-aos="fade-up" >
                            <div className="img_card_wrapper">
                            <img src={item.img} alt="" style={{width:'100%',height:'200px'}}/>
                            </div>
                            <div class="card__body">
                                {/* <div class="card__meta">Kategori</div> */}
                                <h2 class="card__title text-center">{item.course}</h2>
                                    <div class="card__foot">
                                        <div class="card__action">
                                            {
                                                type==='school'?
                                                <button class="card__link" onClick={()=>swal({title:'Coming Soon',icon:'success'})}>View Courses</button>
                                                :
                                                <Link to ={`/courses/college/${item.id}`}>
                                                    <button class="card__link">View Courses</button>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )
                  })  
                }
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Classes
