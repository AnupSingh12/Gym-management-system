import React,{useState,useEffect} from "react";
import {db} from "../../firebase";
import { collection, addDoc, getDocs , deleteDoc, doc } from "firebase/firestore";



function ManageSupplements(){

    const [name,setName] = useState("")
    const [price,setPrice] = useState("");
    const [supplements,setSupplements]= useState([]);

    async function fetchSupplements(){
        const snapshot = await getDocs(collection(db,"supplement"));
        setSupplements(snapshot.docs.map((doc) => ({id: doc.id , ...doc.data()})));
    };


    async function addSupplement(){
        await addDoc(collection(db,"supplements"),{name,price : parseFloat(price)});
        setName("");
        setPrice("");
        fetchSupplements();
    };

    async function deleteSupplement(id){
        await deleteDoc(doc(db,"supplements",id));
        fetchSupplements();
    }


    return(
        <div>
            <h2>Manage Supplements</h2>
            <input 
                type="text"
                value={name}
                onChange={ (e)=> { setName(e.target.value)}}
                placeholder="Supplement Name"
            />
            <input 
                type="number"
                value={price}
                onChange={ (e) => { setPrice(e.target.value)}}
                placeholder="Price"

            />
            <button onClick={addSupplement} >Add Supplement</button>
            <ul>
                {supplements.map((supplement) => (
                    <li key={supplement.id}>
                       {supplement.name} - ${supplement.price} <button onClick={ ()=> {deleteSupplement(supplement.id)}} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageSupplements;