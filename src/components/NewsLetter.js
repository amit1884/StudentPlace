import React,{useState} from 'react'
import firebase from 'firebase'
import swal from 'sweetalert'
function NewsLetter(){
const [email,setEmail]=useState('')
const [loading,setLoading]=useState(false)
    const newsLetterHandler=(e)=>{
        e.preventDefault()
        setLoading(true)
        let id=JSON.parse(localStorage.getItem('userData')).id
        firebase.firestore().collection('subscribers').add({
            user_id:id,
            email:email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(savedSubscriber=>{
              swal({
                  title:'Subscription Added',
                  icon:'success'
              })
              setEmail('')
              setLoading(false)
          })
          .catch(function(error) {
            
            swal({
                title:'Some error occurred',
                icon:'warning'
            })
          })
    }
    return (
        <div className="container-fluid bg-light ">
            <h3 className="text-secondary text-center mt-20 text-heading" style={{overflowY:'hidden'}}>Join Our Newsletter</h3>
            <p className="text-secondary text-center mt-10 mb-10">Enter your Email here</p>
            <form className="container d-flex justify-content-center mt-30" onSubmit={newsLetterHandler}>
                <div className="form-group">
                    <input type="email" required className="newsletter_input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button className="newsletter-btn cursor-pointer" type="submit">
                        {
                            loading?
                            'Loading...'
                            :'Subscribe'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewsLetter
