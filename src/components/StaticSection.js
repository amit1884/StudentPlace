import React from 'react'

function StaticSection(props) {
    return (
        <div className="container-fluid static-section" style={{paddingTop:'60px',paddingBottom:'20px'}}>
            <div className="text-heading text-secondary text-uppercase" data-aos="fade-up">
                {props?.heading}
            </div>
            <img src={props?.img} alt="" className="responsive-static-images" style={{borderRadius:'none'}}/>
            <button 
            style={{border:'none',outline:'none',padding:'10px 20px',marginTop:'10px',borderRadius:'5px'}}
            className="bg_secondary text-white cursor-pointer">{props?.btntext}</button>
        </div>
    )
}

export default StaticSection
