import React, { useEffect,createContext,useReducer,useContext } from 'react'
import {BrowserRouter,Route, Switch,useHistory} from 'react-router-dom';
import {reducer,initialState} from "./Reducers/userReducer"
import firebase from 'firebase'
import fire from './config/firebase.config';
import Home from './Pages/Home'
import Auth from './Pages/Auth';
import Profile from './Pages/Profile';
import AdditionalInfo from './Pages/AdditionlInfo';
import GoToTop from './components/GoToTop'
import Classes from './Pages/Classes';
import './assets/styles/bootstrap.min.css'
import './assets/styles/fontawesome.css'
import './assets/styles/Styles.css'
import './assets/styles/commonStyles.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Courses from './Pages/Courses';
export const UserContext=createContext()
const Routing=()=>{
    const history=useHistory()
    const {dispatch}=useContext(UserContext)
    const authListener=()=>{
        fire.auth().onAuthStateChanged(user=>{
            if(user)
            {
                let loggedInUser={
                    id:user.uid,
                    email:user.email,
                    status:user.emailVerified,
                }
                dispatch({type:"USER",payload:loggedInUser})
                firebase.firestore().collection("users").where("user_id", "==", loggedInUser.id)
              .get()
              .then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                      localStorage.setItem('userId',doc.id)
                      let allData={...loggedInUser,additionalData:doc.data()}
                      localStorage.setItem('userData',JSON.stringify(allData))
                  });
              })
              .catch((error) => {
                  console.log("Error getting documents: ", error);
              });
            }
            else{
                history.push("/auth")
            }
        })
    }
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
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
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/additional_info">
          <AdditionalInfo/>
        </Route>
        <Route path="/classes/:type/">
          <Classes/>
        </Route>
        <Route path="/courses/:type/:id">
          <Courses/>
        </Route>
      </Switch>
    )
  }
function App() {
    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <UserContext.Provider value ={{state,dispatch}}>
          <BrowserRouter>
          <GoToTop/>
            <Routing/>
          </BrowserRouter>
         </UserContext.Provider>
    );
  }

export default App

