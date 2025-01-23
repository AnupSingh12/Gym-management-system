import React, { useEffect } from "react";
import { db } from "../firebase";
import {collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";



function AdminDashboard(){

    const [members, setMembers] = useState([]);
    const [newMember, setNewMember] =useState("");
    

    async function fetchMembers() {
        const querySnapshot = await getDocs(collection(db,"members"));
        setMembers(querySnapshot.docs.map((doc) => ({id : doc.id , ...doc.data}) ));
        
    };

    async function addMember(){
        await addDoc(collection(db,"members"),{ name : newMember});
        setNewMember("");
        fetchMembers();
    };


    async function deleteMember(){
        await deleteDoc(doc(db,"members",id));
        fetchMembers();
    };

    useEffect(() => {
        fetchMembers();
    },[]);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <input
                type="text"
                value={newMember}
                onChange={(e) => {
                    setNewMember(e.target.value)
                }}
                placeholder="Add Member"
            />
            <button onClick={addMember} >Add Member</button>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>
                        {member.name} <button onClick={ () => deleteMember(member.id)} > Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;