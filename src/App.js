import React, { useEffect} from 'react';
import './App.css';
import Sidebar from './features/Sidebar';
import Chat from './features/Chat';
import { auth, provider } from "./app/firebase";
import { Button } from '@material-ui/core';
import { logIn, logOut, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    useEffect(() => {
      // chech something
      auth.onAuthStateChanged(user => {
        if (user) {
          console.log("login")
          dispatch(logIn({uid: user.uid, email: user.email, displayName: user.displayName, photo: user.photoURL}))
        } else {
          //logout
          dispatch(logOut());
        }
      })
    }, [dispatch]) 

  const signIn = (e)=>{
    auth.signInWithPopup(provider).catch(err => {
      console.log(err, "err");
    });
  }
  return (
    <div className="app">
       { user ? 
        <>
          <Sidebar />
          <Chat />
        </> : 
        <div className="">
          <h4>You Must login</h4>
          <Button onClick={signIn}>Sign In</Button>
        </div>
      }
    </div>
  );
}

export default App;
