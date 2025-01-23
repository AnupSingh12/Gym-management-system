import React,{useState,useEffect} from 'react';
import { db } from '../../firebase';
import { collection ,addDoc } from 'firebase/firestore';


function SendNotifications(){

    const[notification,setNotification] =useState("");

    async function sendNotification(){
        await addDoc(collection(db,"notifications"),{
            message: notification,
            timestamp: Date.now(),
        });

        setNotification("");
    };



    return(
        <div>
            <h2>Send Notifications</h2>
            <textarea 
                value={notification}
                onChange={(e) => { setNotification(e.target.value)}}
                placeholder='Enter notifiction'
            />
            <button onClick={sendNotification} >Send</button>
        </div>
    )
};

export default SendNotifications;
