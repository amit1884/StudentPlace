import React from 'react'
import FeedBackForm from './FeedBackForm'
function FeedBack() {
    return (
        <div className="container d-flex flex-direction-column align-items-center"style={{marginTop:'60px'}}>
            <p className="text-heading text-secondary text-uppercase">
                FeedBack
            </p>
            <p>Your feedback is valuable to us !</p>
            <div className="container-fluid d-flex justify-content-center">
                <FeedBackForm/>
            </div>
        </div>
    )
}

export default FeedBack
