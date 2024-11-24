import { useUserStore } from '../dblibs/userStore';
import { useLocation, useNavigate } from 'react-router-dom';

import './profiles.css';

export const Profiles = () => {
    const {currentUser} = useUserStore();
    let navigate = useNavigate();
    let location = useLocation();

    const redirectToPage = (str) => {
        if (location.pathname !== str)
            navigate(str);
    }

    return (
        <div className='profiles'>
                <div className = 'avatarGradient'>
                    {currentUser.avatar?
                        <img className = "forceNoInvert" src = {currentUser.avatar} alt=""/>:
                        <img src = {"./png/user.png"} alt=""/>
                    }
                </div>
                <button className = 'buttonTab'
                    onClick={() => redirectToPage("/home")}>
                    <img src = {"./png/home.png"} alt=""/>
                    <p> Home </p>
                </button>

                <button className = 'buttonTab'>
                    <img src = {"./png/add.png"} alt=""/>
                    <p> Create </p>
                </button>

                <button className = 'buttonTab'
                    onClick={() => redirectToPage("/chat")}>
                    <img src = {"./png/chat.png"} alt=""/>
                    <p> Chat </p>
                </button>

                <div className = 'sep'/>

                <button className = 'buttonTab'>
                    <img src = {"./png/schedule.png"} alt=""/>
                    <p> Schedules </p>
                </button>

                <button className = 'buttonTab'>
                    <img src = {"./png/clipboard.png"} alt=""/>
                    <p> Tasks </p>
                </button>

                <button className = 'buttonTab'>
                    <img src = {"./png/choose.png"} alt=""/>
                    <p> Quizs </p>
                </button>

                <div className = 'sep'/>

                <button className = 'buttonTab'>
                    <img src = {"./png/friends.png"} alt=""/>
                    <p> Friends </p>
                </button>

                <button className = 'buttonTab'>
                    <img src = {"./png/contact-book.png"} alt=""/>
                    <p> Manage </p>
                </button>
        </div>
    )
}