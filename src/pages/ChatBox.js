// import React from 'react'
import './chat.css'
import { db, auth } from "../firebase-config"
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import { useRef, useState, useEffect, StrictMode } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function ChatBox(prop) {

     let [message1, setMessage] = useState("");

     let [user, setUser] = useState({
          name: "",
          email: "",
          message: "",
          room: prop.room
     });

     let refRoom = collection(db, 'users');
     console.log("room")
     let q = query(refRoom, orderBy("createdAt","asc"));

     let [type,setType]=useState("Type Something....")

     let [con, setCon] = useState(null);
      let [refresh,setRefresh]=useState(false);
     useEffect(() => {

          auth.onAuthStateChanged((result) => {
               // console.log(result.displayName)
               setUser({ ...user, 
                    name: result.displayName, 
                    email: result.email,
                     message: message1,
                     createdAt:serverTimestamp()
                     });
          })


          getDocs(q).then((result) => {
               console.log("get message")
               result.forEach((doc) => {
                    data.push({ ...doc.data() })   
               })
               // console.log(...data);
               // console.log(data.length)
               setCon(data)
          });
                
          console.log(user.message,"---------")
          
     }, [message1])


     let data = [];
     function handleMeassage() {
          if (message1=="" || !user.room || !user.name || !user.email) {

               console.log(user);
               alert("something went wrong")
               return;
          }
          addDoc(refRoom, { ...user }).then((result) => {
               console.log("saved message sucessfully");
               setMessage("");
               setType("Type Something.....")
          })
          
     }
     
     function handleChatBox() {
          // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
          prop.chatBox();
     }

     if(con){
     con.forEach((data)=>{
          console.log(data.message)
     })
     }
   

     return (
          <div  >
               <div className='chatBox-header'>
                    <div>
                         <Link to='/'>
                              <button className='btn btn-primary bytnChatBox' >Home</button>
                         </Link>
                         <button className='btn btn-primary bytnChatBox' onClick={handleChatBox} >Chat Room</button>

                    </div>

               </div>

               <div className='chat-box'>

                    <div className='conversesions'>
                         {
                              
                              con &&
                              
                              con.map((data)=>{

                                   if(data.message && data.name && prop.room==data.room)
                                  return <div className='use-Chat'>
                                 
                                  {data.message}
                                  &nbsp;&nbsp;
                                  <div className='user-chat-Name'>
                                 (  {data.name } {data.room} )
                                   </div>
                                  
                                   
                                   </div>
                              })
                         }
                        
                    </div>
                    <div className='message-send-parent'>

                         <input value={message1}  className='form-control message-send' onChange={(e) => { setMessage(e.target.value) }} placeholder={type} />
                         <div onClick={handleMeassage} >
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                   <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                              </svg>
                         </div>

                    </div>
               </div>

          </div>
     )
}

export default ChatBox