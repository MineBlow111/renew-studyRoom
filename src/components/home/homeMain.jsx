import './homeMain.css';
import { auth } from '../dblibs/firebase-config';
import { useUserStore } from '../dblibs/userStore';
import './mainHub.css';
import React, {useState} from 'react';
const toggle = (open, setOpen) => {
    setOpen(!open);
}

export const HomeMain = () => {
    const {currentUser} = useUserStore();
    const [open, setOpen] = useState(false);
    const [collState, setcollState] = useState(false);
    
    return (<div className = 'HomeMain_root'>
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
    </div>);
}