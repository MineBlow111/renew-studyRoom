import React, {useEffect, useState} from 'react';
import './App.css';
import './components/login/loginDes.css';
import {Home} from './components/home/home.jsx';
import {Auth} from './components/login/login.jsx';
import {Notification} from './components/notification/notification.jsx';

import Cookies from 'universal-cookie';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/dblibs/firebase-config.js';
import { useUserStore } from './components/dblibs/userStore.js';
const cookies = new Cookies();

function App() {
  const {currentUser, isLoading, fetchUserInfo, resetUserInfo} = useUserStore();

  useEffect( ()=>{
    const unSub = onAuthStateChanged(auth, (user)=> {
      console.log(auth.currentUser);
      if (!user)
      {
        resetUserInfo();
        return;
      }
      fetchUserInfo(user.uid);
    });

    return () => {
      unSub();
    }
  },[fetchUserInfo]);

  console.log(currentUser);

  if (isLoading) return <div>TEST LOADING</div>;

  return (
    (!currentUser? <div className = "container">
      <Auth/>
      <Notification/>
    </div>:<Home/>
    )
  );
}

export default App;
