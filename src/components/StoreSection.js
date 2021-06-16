import React from 'react'
import Card from './Card'

function StoreSection() {

    const storeItems=[
        {
            id:1,
            title:'Firebolt Headphones',
            img:'',
            btnText:'Buy'
        },
        {
            id:2,
            title:'Color Fit Pro Smartwatch',
            img:'',
            btnText:'Buy'
        },
        {
            id:3,
            title:'Fogg perfume for men',
            img:'',
            btnText:'Buy'
        },
        {
            id:4,
            title:'pTron lite earphones',
            img:'',
            btnText:'Buy'
        },
        {
            id:5,
            title:"Men's shoes sneakers",
            img:'',
            btnText:'Buy'
        },
        {
            id:6,
            title:'Lether Wallet for men',
            img:'',
            btnText:'Buy'
        },
        
        
    ]
    return (
        <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="heading ">
                <p className="text-heading text-center text-uppercase">Deals of the Day</p>
            </div>
            <div className="row">
                {
                    storeItems?.map((items,index)=>{
                       return(
                        <Card item={items}/>
                       )
                    })
                }
            </div>
        </div>
    )
}

export default StoreSection
