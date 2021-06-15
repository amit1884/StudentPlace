import React from 'react'
import ClassesNavs from '../components/ClassesNavs'
import Header from '../components/Header'
import Hero from '../components/Hero'
import StaticSection from '../components/StaticSection'
import StoreSection from '../components/StoreSection'
import ReferImage from '../assets/images/refer.png'
import IPL from '../assets/images/ipl2.png'
import FeedBack from '../components/FeedBack'
import NewsLetter from '../components/NewsLetter'
import GoToTop from '../components/GoToTop'
function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <GoToTop/>
            <div className="container">
            <div className="row">
                <StoreSection/>
                <ClassesNavs/>
            </div>
            </div>
            <StaticSection heading="Refferal Page" img={ReferImage} btntext="Check"/>
            <StaticSection heading="Earn Coins by Playing IPL-Bonanza !" img={IPL} btntext="Play Now"/>
            <FeedBack/>
            <NewsLetter/>
        </div>
    )
}

export default Home
