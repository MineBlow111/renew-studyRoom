import {Notification} from '../components/notification/notification.jsx';
import './login.css';

import { toast } from 'react-toastify';
import {auth, provider, db} from '../components/dblibs/firebase-config.js';
import { uploadImage } from '../components/dblibs/uploadImage.js';
import {onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';

import {useEffect, useState} from 'react';
import { useUserStore } from '../components/dblibs/userStore.js';
import {
    Navigate,
  } from "react-router-dom";

export const Auth = (props) => {
    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    });
    const [loading, setLoading] = useState(true);

    const handleAvatar = e => {
        if (e.target.files[0])
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
        }
        catch(err) {
            toast.error(err.message);
        }
    }

    const handleNormalLogin = async(e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const {email, password} = Object.fromEntries(formData);

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            props.fetchUserInfo(user.uid);
          })
          .catch((err) => {
            toast.error(err.message);
          });
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username, email, password} = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const imgUrl = await uploadImage(avatar.file);

            await setDoc(
                doc(db, "users", res.user.uid), {
                    username,
                    avatar: imgUrl,
                    email,
                    id : res.user.uid,
                    blocked:[],
                }
            )

            await setDoc(
                doc(db, "userchats", res.user.uid), {
                    chats:[],
                }
            )

            toast.success("Account created! Try to log in.")
        }
        catch (err)
        {
            toast.error(err.message);
        }
    }

    return <div className = "login">
        <div className='loginf'>
            <h2> Welcome back </h2>
            <form onSubmit={handleNormalLogin}>
                <input type = "text" placeholder='Email' name = "email"/>
                <input type = "password" placeholder='Password' name = "password"/>
                <button>Sign In</button>
                <button type = "button" className = "specialButton" onClick={signInWithGoogle}>Sign in With Google Account</button>
            </form>
        </div>
        <div className='separator'>
        </div>
        <div className='item'>
            <h2> Create an account </h2>
            <form onSubmit={handleRegister}>
                <label htmlFor='file'>
                <img src = {avatar.url || "./logo512.png"} alt=""/>
                    Upload an image</label>
                <input type = "file" id="file" accept=".jpg,.jpeg,.png" style={{display:"none"}} onChange={handleAvatar}/>
                <input type = "text" placeholder='Username' name = "username"/>
                <input type = "text" placeholder='Email' name = "email"/>
                <input type = "password" placeholder='Password' name = "password"/>
                <button>Register</button>
            </form>
        </div>
    </div>
}

export const Login = () => {
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
        <Auth fetchUserInfo={fetchUserInfo}/>
        <Notification/>
        </div>:<Navigate to="/home" replace={true}/>
        )
    );
}