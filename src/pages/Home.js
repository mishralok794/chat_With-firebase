

import Front from './Front'
import Chat from './Chat'

function Home() {

     

    

     // let auth=firebase.auth().currentUser;
//     let auth= Firebase.Auth.FirebaseAuth;
// const user = auth.currentUser;
// console.log(user,"currentuser home")

// const user = auth.currentUser;

// auth.onAuthStateChanged((user) => {
//      if (user) {
//        console.log('User email: ', user.displayName);
//      }
//    });

     return (
          <div>
             
          <Front  />

          </div>
     );
}

export default Home