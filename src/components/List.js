import React from 'react'

function List({item}) {
    return (
        <div className="list_content container mt-10 mb-10 d-flex">
            <div className="prduct_img">
                <img src ={item.img} alt="" className="list_img"/>
            </div>
            <div className="product_details">
                <p style={{fontSize:'25px'}} className="text-secondary">{item.title}</p>
                <p>{item.desc}</p>
                <p className="text-primary" style={{fontSize:'28px'}}>Rs.{item.price}</p>
            </div>
        </div>
    )
}

export default List
