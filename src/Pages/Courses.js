import React ,{useState,useEffect}from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header';
import ClassesHero from '../components/ClassesHero';
import Footer from '../components/Footer';
import courseImg from '../assets/images/course.jpg'
import {CollegeClasses,SchoolClasses} from '../assets/data/helper'
import swal from 'sweetalert';
function Courses() {
    const {id,type}=useParams();
    const [courses,setCourses]=useState({})
    useEffect(()=>{
        if (type === 'college') {
                setCourses(CollegeClasses[id-1])
        }
        else if (type === 'school') {
            setCourses(SchoolClasses[id-1])
        }
    },[id,type])
    return (
        <>
        <Header/> 
        <ClassesHero/>
        <div className="container">
            <h1 className="text-center text-heading">Major Courses in {courses?.course}</h1>
        </div>
        <div className="container">
            <div className="row">
                {
                    courses?.subcourse?.map((item,index)=>{
                        return(
                            <div className="col-sm-12 col-xs-12 col-md-4" >
                            <div class="card mycard" data-aos="fade-up" >
                            <div className="img_card_wrapper">
                            <img src={courseImg} alt="" style={{width:'100%',height:'200px'}}/>
                            </div>
                            <div class="card__body">
                                {/* <div class="card__meta">Kategori</div> */}
                                <h2 class="card__title text-center">{item.course_name}</h2>
                                <p class="card__content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry....
                                </p>
                                <ul>
                                    <li class="card__content"><b>Lecture Notes:&nbsp;</b>{item?.notes?.length}</li>
                                    <li class="card__content"><b>Videos:&nbsp;</b>{item?.videos?.length}</li>
                                    <li class="card__content"><b>Books:&nbsp;</b>{item?.books?.length}</li>
                                </ul>
                                    <div class="card__foot">
                                    <time class="card__price">Duration:1 Month</time>
                                        <div class="card__action">
                                            <button class="card__link" onClick={()=>swal({title:'Will Be Updated Soon',icon:'success'})}>View Details</button>
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

export default Courses
