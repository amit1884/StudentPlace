import React from 'react'

function FeedBackForm() {
    const submitHandler=(e)=>{

        e.preventDefault()
    }
    return (
        <form onSubmit={submitHandler} className="mt-10">
            <div className="form-group">
                <input type="text" value="" name="fullename"placeholder="Your Name" className="input_field half_width" required/>
                <input type="email" value="" name="email" placeholder="Your Email" className="input_field half_width" required/>
            </div>
            <div className="form-group">
                <input type="text" value="" name="subject" placeholder="Subject" className="input_field form-control" required/>
            </div>
            <div className="form-group">
                <textarea placeholder="Message" className="message_box input_field form-control" required></textarea>
            </div>
            <div className="d-flex justify-content-center">
            <button className="hero-btn text-uppercase cursor-pointer" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default FeedBackForm
