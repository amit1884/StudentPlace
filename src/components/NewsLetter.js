import React from 'react'

function NewsLetter() {
    return (
        <div className="container-fluid bg-light ">
            <h3 className="text-secondary text-center mt-20 text-heading" style={{overflowY:'hidden'}}>Join Our Newsletter</h3>
            <p className="text-secondary text-center mt-10 mb-10">Enter your Email here</p>
            <form className="container d-flex justify-content-center mt-30">
                <div className="form-group">
                    <input type="email" required className="newsletter_input"/>
                    <button className="newsletter-btn cursor-pointer">Subscribe</button>
                </div>
            </form>
        </div>
    )
}

export default NewsLetter
