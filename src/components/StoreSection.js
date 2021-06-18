import React ,{useState,useEffect,useContext}from 'react'
import Card from './Card'
import CardShimmer from './CardShimmer'
import firebase from 'firebase';
import {UserContext} from '../App'
function StoreSection() {
    const {state}=useContext(UserContext)
    const id=state?state.id:''
    const [products,setProducts]=useState([])
    const getProducts=async()=>{
        let tempArr=[...products]
        const response= firebase.firestore().collection('products')
        const data=await response.get();
            data.docs.forEach(item => {
                // console.log(item.id)
                let tempObj={...item.data(),_id:item.id}
                tempArr.push(tempObj)
        });
        setProducts(tempArr)
    }

    useEffect(()=>{

        getProducts()
    },[])


    const addToCart=(prod)=>{
        let userId=localStorage.getItem('userId')
        let userRef=firebase.firestore().collection('users').doc(userId)
        userRef.update({
            cart:firebase.firestore.FieldValue.arrayUnion(prod)
        })
        .then(updated=>{
            console.log('updated')
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    const orderHandle=(prod)=>{
        let userId=localStorage.getItem('userId')
        let userRef=firebase.firestore().collection('users').doc(userId)
        userRef.update({
            orders:firebase.firestore.FieldValue.arrayUnion(prod)
        })
        .then(updated=>{
            console.log('updated')
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return (
        <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="heading " data-aos="zoom-in">
                <p className="text-heading text-center text-uppercase">Deals of the Day</p>
            </div>
            <div className="row">
                {
                    products.length?products?.map((items,index)=>{
                       return(
                        <Card item={items} key={index} addToCart={addToCart} orderHandle={orderHandle}/>
                       )
                    })
                    :
                    <>
                    <CardShimmer/>
                    <CardShimmer/>
                    <CardShimmer/>
                    <CardShimmer/>
                    <CardShimmer/>
                    <CardShimmer/>
                    </>
                 } 
            </div>
        </div>
    )
}

export default StoreSection
