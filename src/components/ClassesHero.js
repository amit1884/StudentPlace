import React from 'react'
import hero from '../assets/images/hero.png'
import logo from '../assets/images/logo.svg'
function ClassesHero() {
    return (
        <div className="container-fluid hero-container" id="hero">
            <div className="hero-text-area">
                <div className="hero-heading">
                    <div className="logo-heading">
                    <img src={logo} alt="" className="hero-logo"/>&nbsp;&nbsp;
                    <span className="text-uppercase text-heading" data-aos="zoom-in">MISSIONED Classes</span>
                    </div>
                    <br/>
                    <p className="font-weight-medium" data-aos="slide-right">Get the best classes by the best Faculty members in the country<br/>
                    </p>
                </div>
            </div>
            <div className="hero-image-area">
            <img src={hero} alt=""/>
            </div>
        </div>

    )
}

export default ClassesHero
