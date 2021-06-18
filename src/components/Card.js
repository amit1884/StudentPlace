import React from 'react'
function Card({item,addToCart,orderHandle}) {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
             <div class="card mycard" >
                <div className="img_card_wrapper">
                <img src={item.img} class="card__thumbnail" alt=""/>
                </div>
                <div class="card__body">
                    {/* <div class="card__meta">Kategori</div> */}
                    <h2 class="card__title">{item.title}</h2>
                    <p class="card__content">{item.desc}</p>
                    <div class="card__foot">
                        <time class="card__price">Rs.{item.price}.00</time>
                        <div class="card__action">
                        <button class="card__link" onClick={()=>orderHandle(item)}>Buy</button>
                        <button class="card__link card__link--danger" onClick={()=>addToCart(item)}>Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
