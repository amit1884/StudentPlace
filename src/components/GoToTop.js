import React from 'react'
import upImg from '../assets/images/up.png'
function GoToTop() {
    return (
        <a href ="#header"className="gototop d-flex align-items-center justify-content-center" >
            <img src ={upImg} alt="" style={{width:'50px'}}/>
        </a>
    )
}

export default GoToTop
