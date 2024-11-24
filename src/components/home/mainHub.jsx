import { auth } from '../dblibs/firebase-config';
import { useUserStore } from '../dblibs/userStore';
import './mainHub.css';
import React, {useState} from 'react';

const toggle = (open, setOpen) => {
    setOpen(!open);
}

export const MainHub = (props) => {
    const {currentUser} = useUserStore();
    const [open, setOpen] = useState(false);
    const [collState, setcollState] = useState(false);
    
    const onClick = () => {
        setcollState(!collState);
    }

    const LogOut = () => {
        auth.signOut();
    }

    return (
        <div className='mainHub'>

            <div className='MainHub_sep'/>

            <div className = 'MainHub_main'>
                <div/>

                <div className = 'info'>
                    <button>
                        <img src = {"./png/bell.png"} alt=""/>
                    </button>
                    <div>
                        <button className = 'hiddenDropdown' onClick={onClick}>
                            {currentUser.avatar?
                                <img className = "forceNoInvert" src = {currentUser.avatar} alt=""/>:
                                <img src = {"./png/user.png"} alt=""/>
                            }
                            <p> {currentUser.username} </p>
                            <img src = {"./png/down.png"} alt=""/>
                        </button>
                        <div className="dropdown-content"
                            style = {collState ? { display:"flex" } : { display:"none" }}>
                            <button> About </button>
                            <button onClick = {LogOut}> Logout </button>
                        </div>
                    </div>
                </div>

                {props.displayComponent}
            </div>

            <div className='MainHub_sep'/>
        </div>
    )
}