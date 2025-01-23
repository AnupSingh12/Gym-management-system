import React,{useState,useEffect} from "react";
import {db} from "../../firebase";
import { collection , getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";


function ManageMembers(){
     
    const [members, setMembers] = useState([]);
    const[newMember, setNewMember] = useState("");

    async function fetchMembers(){
        const snapshot = await getDocs(collection(db,"members"));
        setMembers(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
    };

    async function addMember(){
        await addDoc(collection(db,"members"),{name: newMember});
        setNewMember("")
        fetchMembers();
    };

    async function deleteMember(id){
          await deleteDoc(doc(db,"members",id));
          fetchMembers();
    };

    useEffect(() => {
        fetchMembers();

    },[]);


    return(
        <div>
            <h2>Manage Member</h2>
            <input 
                type="text"
                value={newMember}
                onChange={(e) => {
                    setNewMember(e.target.value)
                }}
                placeholder="Add new member"
            />
            <button onClick={addMember} >Add member</button>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>
                        {member.name} <button onClick={ () => {deleteMember(member.id)}} > Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ManageMembers;