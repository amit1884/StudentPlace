import React from 'react'
import img1 from '../assets/images/1.jpg'
function Card({item}) {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="card custom-card">
                <img src={img1} alt="" className="card_image"/>
                <p className="text-center">{item.title}</p>
                <button className="card_button bg_secondary text-white">{item.btnText}</button>
            </div>
        </div>
    )
}

export default Card
