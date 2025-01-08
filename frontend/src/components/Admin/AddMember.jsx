import React, {useState} from "react";


function AddMember(){
    
    const[formData,setFormData]= useState({
        name:"",
        email : "",
        contact: "",
        package : "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add member</h2>
            <input
            type="text"
            placeholder="name"
            value ={formData.name} 
            onChange={ (e) => {
                setFormData({
                    ...formData, name : e.target.value
                })
            }}
            />
            <input
                type="email"
                placeholder="email"
                value={formData.email}
                onChange={ (e) => {
                    setFormData({
                        ...formData , email : e.target.value
                    })
                }}
            />
            <input
                type="text"
                placeholder="Contact"
                value={formData.contact}
                onChange={ (e) => {
                    setFormData({
                        ...formData, contact : e.target.value
                    })
                }}
            />
            <input
                type="text"
                placeholder="Package"
                value ={formData.package}
                onChange={ (e) => {
                    setFormData({
                        ...formData , package : e.target.value
                    })
                }}
            />
            <button type="submit">Add Member</button>
        </form>
    );
}

export default AddMember;