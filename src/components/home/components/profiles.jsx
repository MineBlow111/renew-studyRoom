import { useUserStore } from '../../dblibs/userStore';
import './profiles.css';

export const Profiles = () => {
    const {currentUser} = useUserStore();

    return (
        <div className='profiles'>
                <div className = 'avatarGradient'>
                    {currentUser.avatar?
                        <img className = "forceNoInvert" src = {currentUser.avatar} alt=""/>:
                        <img src = {"./png/user.png"} alt=""/>
                    }
                </div>
                <div className = 'buttonTab'>
                    <img src = {"./png/home.png"} alt=""/>
                    <p> Home </p>
                </div>

                <div className = 'buttonTab'>
                    <img src = {"./png/add.png"} alt=""/>
                    <p> Create </p>
                </div>

                <div className = 'buttonTab'>
                    <img src = {"./png/chat.png"} alt=""/>
                    <p> Chat </p>
                </div>

                <div className = 'sep'/>

                <div className = 'buttonTab'>
                    <img src = {"./png/schedule.png"} alt=""/>
                    <p> Schedules </p>
                </div>

                <div className = 'buttonTab'>
                    <img src = {"./png/clipboard.png"} alt=""/>
                    <p> Tasks </p>
                </div>

                <div className = 'buttonTab'>
                    <img src = {"./png/choose.png"} alt=""/>
                    <p> Quizs </p>
                </div>

                <div className = 'sep'/>

                <div className = 'buttonTab'>
                    <img src = {"./png/friends.png"} alt=""/>
                    <p> Friends </p>
                </div>

                <div className = 'buttonTab'>
                    <img src = {"./png/contact-book.png"} alt=""/>
                    <p> Manage </p>
                </div>
        </div>
    )
}