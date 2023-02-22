import './App.css';
import React from 'react'
import Signup from './pages/Signup'
// import AuthenticationAndInvitation from './components/AuthenticationAndInvitation';
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ConfirmMail from './pages/ConfirmMail';
import AcceptInvitation from './pages/AcceptInvitation';


function App() {

  return (
    <div className="App">   
     
      <Router>
        <Routes>
          <Route path="/" exact element={<Signup />}/> 
          <Route path="/signup" exact element={<Signup />}/>
          <Route path="/login" exact element={<Login />}/>
          <Route path="/dashboard" exact element={<Dashboard />}/>
          <Route path="/confirm" exact element={<ConfirmMail />}/>
          <Route path="/acceptInvitation" exact element={<AcceptInvitation />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
