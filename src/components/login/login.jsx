import { toast } from 'react-toastify';

import {auth, provider, db} from '../dblibs/firebase-config.js';
import {signInWithPopup} from 'firebase/auth';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';

import {useState} from 'react';
import Cookies from 'universal-cookie';
import { uploadImage } from '../dblibs/uploadImage.js';

const cookies = new Cookies();

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

        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            toast.error(err.message);
        }
        finally{

        }
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
            console.log(err);
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
                <img src = {avatar.url || "./logo192.png"} alt=""/>
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