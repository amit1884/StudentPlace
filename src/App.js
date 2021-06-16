import React, { useEffect,createContext,useReducer,useContext } from 'react'
import {BrowserRouter,Route, Switch,useHistory} from 'react-router-dom';
import {reducer,initialState} from "./Reducers/userReducer"
import AOS from 'aos';
import fire from './config/firebase.config';
import Home from './Pages/Home'
import Auth from './Pages/Auth';
import './assets/styles/bootstrap.min.css'
import './assets/styles/Styles.css'
import './assets/styles/commonStyles.css'
export const UserContext=createContext()
const Routing=()=>{
    const history=useHistory()
    const {dispatch}=useContext(UserContext)
    useEffect(() => {
      AOS.init({
        duration : 2000
      });
    }, []);
    const authListener=()=>{
        fire.auth().onAuthStateChanged(user=>{
            if(user)
            {
                let loggedInUser={
                    id:user.uid,
                    email:user.email,
                    status:user.emailVerified,
                }
                console.log(loggedInUser)
                dispatch({type:"USER",payload:loggedInUser})
                history.push('/')
            }
            else{
                console.log('Login First')
                history.push("/auth")
            }
        })
    }
    useEffect(() => {
        authListener() 
    }, [])
    return(
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/auth">
          <Auth/>
        </Route>
        {/* <Route path="/signup">
          <SignUp/>
        </Route> */}
      </Switch>
    )
  }
function App() {
    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <UserContext.Provider value ={{state,dispatch}}>
          <BrowserRouter>
            <Routing/>
          </BrowserRouter>
         </UserContext.Provider>
    );
  }

export default App

