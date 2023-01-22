import React, { useRef, useState } from 'react'
import './chat.css'
import { auth, db } from "../firebase-config"
import { addDoc, collection } from 'firebase/firestore'
import ChatBox from './ChatBox'
import { Link, useNavigate } from 'react-router-dom';



function Chat() {


     let room1 = useRef(null);

     let [chat, setChat] = useState(false)
     let [room2, setRoom] = useState("");
     let refRoom = collection(db, 'users');
     // let navigate=useNavigate();

     // let q = query(refRoom, where("room", "==", room));


     // entering chat room code to enter chat box


     function handleRoom() {
          if (!room2) {
               alert("fill the arguments")
               return;
          }
          room1.current = room2;

          addDoc(refRoom, {
               "room": room1.current
          }).then((result) => {
               console.log(result);
               console.log("saved sucessfully");
               setRoom(true)
                setChat(true)
               // navigate("/chatbox")
               // window.location.reload()
          })
     }

     // function handleChat() {
     //      navigate('/chatbox')
     //      setRoom(true)
     //      // window.location.reload()
     // }

     // console.log(room1.current, "zzzzzzzz")
     // console.log(chat.current, "chat.current")

     function handleChat(){
          console.log("xxxxxxxxxxxxxxxxxxx")
           setChat(false);
     }

     return (


          <div>
               {
                   !chat ?
                         <div className='chatParent'>


                              <div className="chatBox-header">
                                   <Link to='/'> <button className='btn btn-primary' >Home</button> </Link>

                              </div>
                              <div className='chat-parent'>
                                   <div >
                                        <input onChange={(e) => { setRoom(e.target.value) }} className='form-control room-box' placeholder='Enter Room No or Create...' />
                                        <button className='btn btn-primary roomBtn '
                                             onClick={handleRoom}>Enter Room</button>
                                   </div>


                              </div>
                         </div>
                         :
                         <ChatBox room={room1.current} chatBox={handleChat}/>
               }
          </div>

     )
}

export default Chat