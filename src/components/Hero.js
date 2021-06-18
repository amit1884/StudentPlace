import React ,{useEffect}from 'react'
import hero from '../assets/images/hero.png'
import logo from '../assets/images/logo.svg'
function Hero() {
   
    return (
        <div className="container-fluid hero-container" id="hero">
            <div className="hero-text-area">
                <div className="hero-heading">
                    <div className="logo-heading" data-aos="zoom-in">
                    <img src={logo} alt="" className="hero-logo"/>&nbsp;&nbsp;
                    <span className="text-uppercase text-heading">MISSIONED STORE</span>
                    </div>
                    <br/>
                    <p className="font-weight-medium" data-aos="fade-left">The one stop shop for all students of India<br/>
                    Trusted by 2500+ students.</p>
                </div>
                <div className="button-area">
                    <a href ="#store">
                    <button className="hero-btn text-uppercase cursor-pointer">Start Shopping</button>
                    </a>
                    <button className="hero-btn text-uppercase cursor-pointer">MISSIONED Pro</button>
                </div>
            </div>
            <div className="hero-image-area">
            <img src={hero} alt=""/>
            </div>
        </div>
    )
}

export default Hero
