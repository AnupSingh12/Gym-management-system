import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard.jsx";
import CreateBill from "./components/Admin/CreateBill.jsx";
import AddMember from './components/Admin/AddMember.jsx';



function App(){
    return (<Router>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path = "/admin/add-member" element={<AddMember/>} />
            <Route path="/admin/create-bill" element={<CreateBill/>} />
        </Routes>
    </Router>)
        
    
};

export default App;