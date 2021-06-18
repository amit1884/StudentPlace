import React,{useEffect, useContext, useState} from 'react'
import Header from '../components/Header'
import ClassesNavs from '../components/ClassesNavs'
import Hero from '../components/Hero'
import StaticSection from '../components/StaticSection'
import StoreSection from '../components/StoreSection'
import ReferImage from '../assets/images/refer.png'
import IPL from '../assets/images/ipl2.png'
import FeedBack from '../components/FeedBack'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
function Home() {

    return (
        <div>
            <Header/>
            <Hero/>
            <div className="container-fluid " id="store">
            <div className="row">
                <StoreSection/>
                <ClassesNavs/>
            </div>
            </div>
            <StaticSection heading="Refferal Page" img={ReferImage} btntext="Check"/>
            <StaticSection heading="Earn Coins by Playing IPL-Bonanza !" img={IPL} btntext="Play Now"/>
            <FeedBack/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Home
