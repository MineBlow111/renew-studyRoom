import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "../components/dblibs/userStore";
import { auth } from "../components/dblibs/firebase-config";
import React, {useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";

export const PrivRoutes = (props) => {
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
      (currentUser
      ? props.targetComponent
      : <Navigate to="/login" replace={true} />
      )
    )
  }
  