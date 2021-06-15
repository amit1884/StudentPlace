import React from 'react'
import hero from '../assets/images/hero.png'
import logo from '../assets/images/logo.svg'
function Hero() {
    return (
        <div className="container-fluid hero-container" id="hero">
            <div className="hero-text-area">
                <div className="hero-heading">
                    <div className="logo-heading">
                    <img src={logo} alt="" className="hero-logo"/>&nbsp;&nbsp;
                    <span className="text-uppercase text-heading">MISSIONED STORE</span>
                    </div>
                    <br/>
                    <p className="font-weight-medium">The one stop shop for all students of India<br/>
                    Trusted by 2500+ students.</p>
                </div>
                <div className="button-area">
                    <button className="hero-btn text-uppercase">Start Shopping</button>
                    <button className="hero-btn text-uppercase">MISSIONED Pro</button>
                </div>
            </div>
            <div className="hero-image-area">
            <img src={hero} alt=""/>
            </div>
        </div>
    )
}

export default Hero
