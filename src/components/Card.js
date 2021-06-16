import React from 'react'
import img1 from '../assets/images/1.jpg'
function Card({item}) {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
             <div class="card mycard" >
                <div className="img_card_wrapper">
                <img src={img1} class="card__thumbnail" alt=""/>
                </div>
                <div class="card__body">
                    {/* <div class="card__meta">Kategori</div> */}
                    <h2 class="card__title">{item.title}</h2>
                    <p class="card__content">Ad eiusmod enim dolore amet in consequat fugiat occaecat ...</p>
                    <div class="card__foot">
                        <time class="card__price">Rs.2000.00</time>
                        <div class="card__action">
                        <button class="card__link">Buy</button>
                        <button class="card__link card__link--danger">Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
