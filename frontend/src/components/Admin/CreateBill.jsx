import React from "react";
import { useState } from "react";


function CreateBill(){

    const [formData,setFormData] = useState({
        memberId : "",
        amount : "",
    });


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }

    return (

        <form onSubmit={handleSubmit}>
            <h2>Create Bill</h2>
            <input
                type="text"
                placeholder="Member ID"
                value={formData.memberId}
                onChange={ (e) =>{
                    setFormData({
                        ...formData, memberId : e.target.value
                    })
                }}
            />
            <input
                type ="text"
                placeholder="Amount"
                value={formData.amount}
            />

            <button type = "submit">Create Bill</button>
        </form>

    )
}

export default CreateBill;