import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"


function App(){
  return(
    <Router>
    <Header/>
      <Routes>
        <Route path ="/admin" element={<AdminDashboard/>}/>
        <Route path="/member" element={<MemberDashboard/>} />
        <Route path="/user" element={<UserDashboard/>} />
      </Routes>
    <Footer/>  
    </Router>
  );
}

export default App;