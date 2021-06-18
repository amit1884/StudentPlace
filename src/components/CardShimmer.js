import React from 'react'

function CardShimmer() {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div class="card mycard" >
                <div className="img_card_wrapper">
                <div class="card__thumbnail shine" alt=""></div>
                </div>
                <div class="card__body">
                    {/* <div class="card__meta">Kategori</div> */}
                    <div class="card__title">
                        <div className="shine" style={{width:'100px',height:'5px'}}></div>
                    </div>
                    <div class="card__content">
                    <div className="shine" style={{width:'300px',height:'5px'}}></div>
                    <div className="shine" style={{width:'300px',height:'5px'}}></div>
                    <div className="shine" style={{width:'200px',height:'5px'}}></div>
                    </div>
                    <div class="card__foot">
                        <div class="card__price">
                        <div className="shine" style={{width:'100px',height:'8px'}}></div>
                        </div>
                        <div class="card__action">
                        <button class="card__link shine" style={{width:'60px',height:'30px'}}></button>
                        <button class="card__link card__link--danger shine" style={{width:'60px',height:'30px'}}></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardShimmer
