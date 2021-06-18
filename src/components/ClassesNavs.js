import React from 'react'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
function ClassesNavs() {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="heading ">
                <p className="text-heading text-center text-uppercase">Earn coins by studying</p>
            </div>
            <div className="row">
                <dive className="col-12 ">
                <img src={img1} alt="" style={{marginTop:'20px'}} className="responsive-static-images"/>
                </dive>
                <div className="col-12 d-flex justify-content-center">
                    <button 
                    className="cursor-pointer  blue_btn">Go To MissionEd classes(For Students)</button>
                </div>
                <dive className="col-12">
                <img src={img2} alt="" style={{marginTop:'20px'}} className="responsive-static-images"/>
                </dive>
                <div className="col-12 d-flex justify-content-center">
                    <button 
                    className=" cursor-pointer  blue_btn">Go To MissionEd classes(8-12)</button>
                </div>
            </div>
        </div>
    )
}

export default ClassesNavs
