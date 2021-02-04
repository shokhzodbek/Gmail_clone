import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './components/Sidebar'
import Header from './components/Header'

import {selectMail} from './features/MailReducer'

import SendMail from './components/SendMail'
import EmailList from './Pages/EmailList/Email'
import Mail from './Pages/Mail/Mail'
import { useSelector } from 'react-redux';

import {selectUser} from './features/userReducer'
import Login from './Pages/Login'
import {useDispatch} from 'react-redux'
import { auth } from './firestore';

import {login} from './features/userReducer'
function App() {
  const sendMessageOpen = useSelector(selectMail)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
auth.onAuthStateChanged(user=>{
  if(user){
    dispatch(login({
      displayName:user.displayName,
      email:user.email,
      photoUrl:user.photoURL
    }))
  }
})
  },[])
  return (
    <Router>
      {!user ? <Login/>:(
    <div className="app">
      <Header/>

      <div className="appBody">
      <Sidebar/>
      <Switch> 
        <Route path="/mail"><Mail/></Route>
        <Route path="/"><EmailList/></Route>
      </Switch>
      </div>
    {sendMessageOpen && <SendMail/>}
    </div>)}
    </Router>
  );
}

export default App;
