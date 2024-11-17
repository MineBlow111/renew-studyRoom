import { auth } from '../../dblibs/firebase-config';
import { useUserStore } from '../../dblibs/userStore';
import './mainHub.css';
import React, {useState} from 'react';
const toggle = (open, setOpen) => {
    setOpen(!open);
}
  
  
export const MainHub = () => {
    const {currentUser, isLoading, fetchUserInfo} = useUserStore();
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

            <div className='separator'/>

            <div className = 'main'>
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

                <div className='mainSection'>
                    <h1> WELCOME BACK, {currentUser.username}! </h1>
                </div>

                <div className = "separator"/>
                
                <div className = 'searchBar'>
                    <div>
                    <img src = {"./png/search.png"} alt=""/>
                    <input type = 'text' placeholder = 'Search'/>
                    </div>

                    <div className = 'separator'/>

                    <button type="button"
                    className="collapsible"
                    onClick={() => toggle(open, setOpen)}
                    >
                    <img src = {"./png/filter.png"} alt=""/>

                    {open && <div className="content">
                        <p>Lorem ipsum...</p>
                    </div>}

                    </button>
                </div>

                <div/>
                <div className = 'roomDisplay'>
                    <div className = 'room'> </div>
                    <div className = 'room'> </div>
                    <div className = 'room'> </div>

                </div>

            </div>

            <div className='separator'/>
        </div>
    )
}