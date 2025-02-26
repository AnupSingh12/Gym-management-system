import React from "react";
import { BrowserRouter as Router , Routes , Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import Home from "./pages/Home";
import "./styles/App.css"


function App(){
  return(
    
    <Router>
      
      <Routes>
      <Route path="/"  element={ <Home/> } />
        <Route path ="/admin" element={<AdminDashboard/>}/>
        <Route path="/member" element={<MemberDashboard/>} />
        <Route path="/user" element={<UserDashboard/>} />
      </Routes>
      
    </Router>
    
  );
}

export default App;