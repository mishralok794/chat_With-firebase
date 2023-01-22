import React from 'react'
import { useState } from 'react';
import Header from '../components/Header';
import { provider, auth } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

function Front() {
     let navigate = useNavigate();

     let [alert, setAlert] = useState(false);
     let [chatRoom, setChatRoom] = useState(false);

     function handleLogin() {
          signInWithPopup(auth, provider).then((result) => {
               console.log("login sucessful")
               setAlert(true);
               navigate("chat");

               auth.onAuthStateChanged((user) => {
                    setChatRoom(user.displayName);
               })
          })
          console.log("hey login")
     }

        
          auth.onAuthStateChanged((user)=>{
               setChatRoom(user.displayName);
               console.log(user.displayName)
               
               console.log("handlechat")
            })
          

console.log(chatRoom,"zzzzzzzz")
return (
     <div>
          <Header />
          <div className='about-home'>
               <div className='login-home'>
                    <img src='https://www.appier.com/hs-fs/hubfs/Appier%20Website%20Images/By%20Pages/Product%20Listing/BotBonnie/BB_T2P4/BotBonnie%20image-03%201-4.png?width=1168&height=720&name=BotBonnie%20image-03%201-4.png' className='image-home-login' />

                    {
                         !chatRoom ?

                              <button className='btn btn-primary login-button' onClick={handleLogin} > login</button>
                              :
                              <div className='chatRoom'>
                                   <h4>{chatRoom}</h4>
                                   <Link to='/chat'>
                                        <button className='btn btn-primary login-button-chatRoom'> Go to ChatRoom</button>
                                   </Link>
                              </div>

                    }
                    {
                         alert &&
                         <div className="alert alert-success" role="alert">
                              Login sucessful
                         </div>
                    }


               </div>

               <div className='about-chat-home'>
                    <img src='https://scontent.flko2-1.fna.fbcdn.net/v/t1.6435-9/53800869_2310411565898211_5790196259578970112_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lkYqUqp1cO0AX_6mnYy&_nc_ht=scontent.flko2-1.fna&oh=00_AfBMkirQAZt6GFKu0pZXODIAlExoapdHBlW8r5rnpXYR0g&oe=63F108C8' className='image-home' />
                    <p>You can chat here But For chatting u need Room Code to chat or create Room chat</p>
               </div>
          </div>

     </div>
)
                    }
export default Front