import React from 'react'

function Spinner({width,height}) {
    return (
        <div>
            <div className="loader" style={{width:width,height:height}}></div>
        </div>
    )
}

export default Spinner
