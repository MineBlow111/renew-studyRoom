import { auth } from '../dblibs/firebase-config';
import { useUserStore } from '../dblibs/userStore';
import './chatMain.css';
import React from 'react';

export const ChatMain = () => {
    // return (
    //     <div className='mainHub'>

    //         <div className='separator'/>

    //         <div className = 'main'>
    //             <div/>

    //             <div className = 'info'>
    //                 <button>
    //                     <img src = {"./png/bell.png"} alt=""/>
    //                 </button>
    //                 <div>
    //                     <button className = 'hiddenDropdown' onClick={onClick}>
    //                         {currentUser.avatar?
    //                             <img className = "forceNoInvert" src = {currentUser.avatar} alt=""/>:
    //                             <img src = {"./png/user.png"} alt=""/>
    //                         }
    //                         <p> {currentUser.username} </p>
    //                         <img src = {"./png/down.png"} alt=""/>
    //                     </button>
    //                     <div className="dropdown-content"
    //                         style = {collState ? { display:"flex" } : { display:"none" }}>
    //                         <button> About </button>
    //                         <button onClick = {LogOut}> Logout </button>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className='chat_ui'>
    //                 <div className='chat_navbar'>
    //                     <div className='chat_search'>
    //                         <div>
    //                             <img src = {"./png/search.png"} alt=""/>
    //                             <input type = 'text' placeholder = 'Search'/>
    //                             <button>
    //                                 <img src = {"./png/add.png"} alt=""/>
    //                             </button>
    //                         </div>
    //                     </div>
                        
    //                     <div className='chat_users'>
    //                         <div className = 'chat_userDisplay'>
    //                             <div>
    //                                 <img src = {"./png/user.png"} alt=""/>
    //                             </div>
    //                             <div className='chat_userSep'> </div>
    //                             <div className='chat_userInf'>
    //                                 <p> Name </p>
    //                                 <span> Last message </span>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className='chat_bar'>
    //                     <div className = 'chat_chatArena'>
    //                         <div className='chat_TextBox'>
    //                             <img src = {"./png/user.png"} alt=""/>
    //                             <div className ='chat_text'>
    //                                 <p> ジャバウォックは不思議の国のアリスに出て来るドラゴンのような怪物で、諸説あるものの”わけのわからない事を喋る”を意味するJabberから取られているという。
    //                                 所々歌詞が電波なのもここから来ていたりするのかな。
    //                                 前半は柔らかい曲調が少女らしくてゆめかわなイメージすらあるのに、wotakuさん特有の疾走感で雰囲気が一変して不穏な攻撃力を感じてかっこいいし、今回も神曲でした。
    //                                 </p>
    //                                 <span> 1 minute ago</span>
    //                             </div>
    //                         </div>

    //                         <div className='chat_TextBox Self'>
    //                             <div className ='chat_text'>
    //                                 <p> ジャバウォックは不思議の国のアリスに出て来るドラゴンのような怪物で、諸説あるものの”わけのわからない事を喋る”を意味するJabberから取られているという。
    //                                 所々歌詞が電波なのもここから来ていたりするのかな。
    //                                 前半は柔らかい曲調が少女らしくてゆめかわなイメージすらあるのに、wotakuさん特有の疾走感で雰囲気が一変して不穏な攻撃力を感じてかっこいいし、今回も神曲でした。
    //                                 </p>
    //                                 <span> 1 minute ago</span>
    //                             </div>
    //                         </div>

    //                         <div className='chat_TextBox Self'>
    //                             <div className ='chat_text'>
    //                                 <p> test </p>
    //                                 <span> 1 minute ago</span>
    //                             </div>
    //                         </div>

    //                         <div className='chat_TextBox'>
    //                             <img src = {"./png/user.png"} alt=""/>
    //                             <div className ='chat_text'>
    //                                 <p> www。</p>
    //                                 <span> 1 minute ago</span>
    //                             </div>
    //                         </div>
    //                     </div>

    //                     <div className = 'chat_chatBar'>
    //                         <button> 
    //                             <img src = {"./png/image.png"} alt=""/>
    //                         </button>
    //                         <input type = 'text' placeholder = 'Search'/>
    //                         <button> 
    //                             <img src = {"./png/happy.png"} alt=""/>
    //                         </button>
    //                         <button>
    //                             <img src = {"./png/send-message.png"} alt=""/>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //         <div className='separator'/>
    //     </div>
    // )

    return (

        <div className='chat_ui'>
            <div className='chat_navbar'>
                <div className='chat_search'>
                    <div>
                        <img src = {"./png/search.png"} alt=""/>
                        <input type = 'text' placeholder = 'Search'/>
                        <button>
                            <img src = {"./png/add.png"} alt=""/>
                        </button>
                    </div>
                </div>
                
                <div className='chat_users'>
                    <div className = 'chat_userDisplay'>
                        <div>
                            <img src = {"./png/user.png"} alt=""/>
                        </div>
                        <div className='chat_userSep'> </div>
                        <div className='chat_userInf'>
                            <p> Name </p>
                            <span> Last message </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='chat_bar'>
                <div className = 'chat_chatArena'>
                    <div className='chat_TextBox'>
                        <img src = {"./png/user.png"} alt=""/>
                        <div className ='chat_text'>
                            <p> ジャバウォックは不思議の国のアリスに出て来るドラゴンのような怪物で、諸説あるものの”わけのわからない事を喋る”を意味するJabberから取られているという。
                            所々歌詞が電波なのもここから来ていたりするのかな。
                            前半は柔らかい曲調が少女らしくてゆめかわなイメージすらあるのに、wotakuさん特有の疾走感で雰囲気が一変して不穏な攻撃力を感じてかっこいいし、今回も神曲でした。
                            </p>
                            <span> 1 minute ago</span>
                        </div>
                    </div>

                    <div className='chat_TextBox Self'>
                        <div className ='chat_text'>
                            <p> ジャバウォックは不思議の国のアリスに出て来るドラゴンのような怪物で、諸説あるものの”わけのわからない事を喋る”を意味するJabberから取られているという。
                            所々歌詞が電波なのもここから来ていたりするのかな。
                            前半は柔らかい曲調が少女らしくてゆめかわなイメージすらあるのに、wotakuさん特有の疾走感で雰囲気が一変して不穏な攻撃力を感じてかっこいいし、今回も神曲でした。
                            </p>
                            <span> 1 minute ago</span>
                        </div>
                    </div>

                    <div className='chat_TextBox Self'>
                        <div className ='chat_text'>
                            <p> test </p>
                            <span> 1 minute ago</span>
                        </div>
                    </div>

                    <div className='chat_TextBox'>
                        <img src = {"./png/user.png"} alt=""/>
                        <div className ='chat_text'>
                            <p> www。</p>
                            <span> 1 minute ago</span>
                        </div>
                    </div>
                </div>

                <div className = 'chat_chatBar'>
                    <button> 
                        <img src = {"./png/image.png"} alt=""/>
                    </button>
                    <input type = 'text' placeholder = 'Search'/>
                    <button> 
                        <img src = {"./png/happy.png"} alt=""/>
                    </button>
                    <button>
                        <img src = {"./png/send-message.png"} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}