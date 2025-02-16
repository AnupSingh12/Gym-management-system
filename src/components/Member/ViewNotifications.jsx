import React,{useState,useEffect} from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";


function ViewNotifications(){

    const [notifictaions,setNotifications]= useState([]);

    useEffect(()=> {
        const unsubscribe = onSnapshot(collection(db,"notifications"),(sanpshot) => {
            setNotifications(sanpshot.docs.map((doc) => ({id: doc.id , ...doc.data()})))
        });
        return unsubscribe;
    }, []);

    return(
        <div className="dashboard" >
            <h2>Notifications</h2>
            <ul>
                {notifictaions.map((notifictaion)=> (
                    <li key={notifictaion.id} className="notification-item" >
                        {notifictaion.message} - { new Date(notifictaion.timestamp).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewNotifications;