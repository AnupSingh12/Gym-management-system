import React from "react";
import  ManageMembers from '../components/Admin/ManageMembers';
import SendNotifications from './../components/Admin/SendNotifications';
import ManageSupplements from './../components/Admin/ManageSupplements';



function AdminDashboard(){
    return(
        <div>
            <h1>Admin Dashboard</h1>
            <ManageMembers/>
            <SendNotifications/>
            <ManageSupplements/>
        </div>
    );
};

export default AdminDashboard;
