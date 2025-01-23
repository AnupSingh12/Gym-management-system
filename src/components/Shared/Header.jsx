import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <Header>
            <nav>
                <Link to="/admin">Admin</Link>
                <Link to="/member">Member</Link>
                <Link to="/user" >User</Link>
            </nav>
        </Header>
    );
};


export default Header;

