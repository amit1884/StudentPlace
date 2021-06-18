import React from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header';
function Classes() {
    const {id}=useParams();
    return (
        <>
        <Header/> 
        </>
    )
}

export default Classes
