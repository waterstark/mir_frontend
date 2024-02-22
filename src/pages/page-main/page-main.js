import * as React from 'react';
import './page-main.css'
import UserStore from './../../store/store'
import { useEffect, useState } from 'react';
import UserService from '../../services/userApp';
import { observer } from 'mobx-react-lite';
import AuthService from '../../services/userAuth';
import MessageService from '../../services/userMsg';
import { MS } from 'country-region-data';

export const PageMain = observer(() =>
{

    const [loading, setLoading] = useState('true');

    useEffect(() => {
        onLoad();
    }, [])

    const onLoad = async () => {
        await AuthService.refresh();
        await AuthService.getprofile();
        await UserService.getQuestList();
        await UserService.getMatches();
        await MessageService.connect();
        setLoading(false);
    }

    const [currentId, setCurrentId] = useState(0)
    const [showContent, setShowContent] = useState(true)
    const [chatUserId, setChatUserId] = useState(null)

    const handleBack = () => {
        setCurrentId(prev => prev - 1);
    }

    const handleLike = async () => {
        await UserService.likeUser(UserStore?.questionareList[currentId].user_id, "true");
        setCurrentId(prev => prev + 1); 
    }

    return(    
        <>
            {
                !loading &&
                <div className='page-main'>        
            <div className='app-container'>
                <div className='app-chat'>
                    <div className='app-chat-bar'>
                        <div onClick={(e) => {setShowContent(false)}} className='app-chat-bar-likes'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                            <rect x="0.5" width="56" height="56" rx="28" fill="#9CA1A3"/>
                            <path d="M35.3144 17.625C30.7498 17.625 28.4997 21.9886 28.4997 21.9886C28.4997 21.9886 26.2497 17.625 21.6851 17.625C17.9754 17.625 15.0377 20.6345 14.9997 24.2257C14.9224 31.6799 21.0979 36.9811 27.8669 41.4361C28.0536 41.5592 28.274 41.625 28.4997 41.625C28.7255 41.625 28.9459 41.5592 29.1326 41.4361C35.9008 36.9811 42.0764 31.6799 41.9998 24.2257C41.9618 20.6345 39.0241 17.625 35.3144 17.625Z" stroke="#F8F8F8" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <div onClick={(e) => {setShowContent(false)}} className='app-chat-bar-messages'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                            <rect x="0.5" width="56" height="56" rx="28" fill="#9CA1A3"/>
                            <path d="M40.8051 32.5422C40.7348 32.2891 40.8895 31.9375 41.0371 31.6844C41.0822 31.609 41.1315 31.5363 41.1848 31.4664C42.4478 29.5897 43.1233 27.3793 43.1254 25.1172C43.1465 18.6344 37.6762 13.375 30.9121 13.375C25.0129 13.375 20.091 17.3898 18.9379 22.7195C18.7654 23.5095 18.6782 24.3157 18.6777 25.1242C18.6777 31.6141 23.9371 37.0141 30.7012 37.0141C31.777 37.0141 33.2254 36.6906 34.0199 36.4727C34.8145 36.2547 35.602 35.9664 35.8059 35.8891C36.0149 35.8103 36.2364 35.7698 36.4598 35.7695C36.7035 35.7686 36.9449 35.8164 37.1699 35.9102L41.1566 37.3234C41.244 37.3604 41.3365 37.3841 41.4309 37.3938C41.58 37.3938 41.7231 37.3345 41.8286 37.229C41.9341 37.1235 41.9934 36.9804 41.9934 36.8313C41.9885 36.7669 41.9767 36.7032 41.9582 36.6414L40.8051 32.5422Z" stroke="#F8F8F8" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M15.173 26.3125C14.2508 27.9692 13.8047 29.8487 13.884 31.7432C13.9633 33.6376 14.5649 35.4732 15.6223 37.0471C15.7847 37.2925 15.8761 37.4823 15.848 37.6096C15.8199 37.7369 15.0092 41.9598 15.0092 41.9598C14.9897 42.0587 14.9971 42.1609 15.0306 42.2559C15.0641 42.3509 15.1225 42.4351 15.1997 42.4998C15.3027 42.5819 15.4308 42.6261 15.5625 42.625C15.6329 42.6252 15.7026 42.6108 15.7672 42.5828L19.7194 41.0359C19.9914 40.9287 20.2949 40.9338 20.5632 41.05C21.8949 41.5689 23.3672 41.8938 24.8403 41.8938C26.8169 41.8958 28.7589 41.3745 30.4688 40.3827" stroke="#F8F8F8" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>
                        </div>
                        <div className='app-chat-bar-list'>
                            {
                                UserStore.matches ? 
                                UserStore.matches?.map((el,index) => {
                                    return(
                                        <div onClick={() => {setShowContent(true); setChatUserId(index)}} id={`match${index}`} className='chat-item'>
                                            <div className='chat-item-image' />
                                            <h2 className='chat-item-name'>{el.firstname}</h2>
                                        </div>
                                    )
                                })
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <div className={`app-chat-content ${showContent ? 'open' : ''}`}>
                            {
                            chatUserId != null ?
                            <>
                                <div className='chat-content-header'>
                                    <div className='chat-item-image' />
                                    <h2>{UserStore.matches[chatUserId].firstname}</h2>
                                </div>
                                <div className='chat-content-chat'></div>
                                <div className='chat-message-box'>
                                    <input className='chat-message-input' type='text' autoComplete='off' placeholder='Type a message' />
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        console.log(UserStore)
                                        MessageService.sendMessage(UserStore.matches[chatUserId].match_id, UserStore.matches[chatUserId].user_id, UserStore.user.user_id, 'huahfkadaj');
                                    }}>SEND</button>
                                </div>
                            </>
                            :
                            "no user selected"
                            }
                    </div>
                </div>
                <div className='app-pfp'>
                    <div className='pfp-icons' style={{display: UserStore?.questionareList[currentId] ? "flex" : "none"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                            <circle onClick={currentId == 0 ? {} : handleBack} cx="33" cy="33" r="33" fill={currentId == 0 ? "#525252" : "#EB5353"}/>
                            <path d="M39 19.125C39 19.125 41.2838 18 33 18C30.0333 18 27.1332 18.8797 24.6665 20.528C22.1997 22.1762 20.2771 24.5189 19.1418 27.2597C18.0065 30.0006 17.7094 33.0166 18.2882 35.9263C18.867 38.8361 20.2956 41.5088 22.3934 43.6066C24.4912 45.7044 27.1639 47.133 30.0737 47.7118C32.9834 48.2905 35.9994 47.9935 38.7403 46.8582C41.4811 45.7229 43.8238 43.8003 45.472 41.3335C47.1203 38.8668 48 35.9667 48 33" stroke="#F8F8F8" stroke-width="7.4375" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M33 11L40.515 18.515L33 26.0299" stroke="#F8F8F8" stroke-width="7.4375" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
                            <circle onClick={handleLike} cx="43" cy="43" r="43" fill="#7653EB"/>
                            <path d="M43 63C42.3824 62.9992 41.7794 62.8173 41.2693 62.4778C33.713 57.4762 30.4411 54.0469 28.6363 51.9028C24.7904 47.3325 22.9491 42.6403 23.0011 37.5591C23.0616 31.7363 27.8527 27 33.6813 27C37.9195 27 40.8549 29.3278 42.5644 31.2666C42.6186 31.3274 42.6855 31.3761 42.7607 31.4095C42.8358 31.4429 42.9174 31.4602 43 31.4602C43.0826 31.4602 43.1642 31.4429 43.2394 31.4095C43.3145 31.3761 43.3814 31.3274 43.4356 31.2666C45.1451 29.3259 48.0805 27 52.3187 27C58.1473 27 62.9384 31.7362 62.9989 37.56C63.0509 42.6422 61.2077 47.3344 57.3637 51.9038C55.5589 54.0478 52.287 57.4772 44.7307 62.4788C44.2205 62.8179 43.6175 62.9995 43 63Z" fill="#F8F8F8"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                            <circle cx="33" cy="33" r="33" fill="#EB53CA"/>
                            <path d="M28.1334 53C27.9201 53.0002 27.7094 52.9515 27.5161 52.8572C27.3227 52.763 27.1514 52.6256 27.0142 52.4546C26.877 52.2836 26.7772 52.0832 26.7218 51.8675C26.6664 51.6518 26.6568 51.426 26.6936 51.206V51.1968L28.9296 38.3343H20.2726C20.0323 38.3343 19.7969 38.263 19.5937 38.1287C19.3905 37.9944 19.2277 37.8026 19.1242 37.5754C19.0206 37.3483 18.9806 37.0951 19.0087 36.8451C19.0369 36.5951 19.132 36.3585 19.283 36.1628L36.7172 13.586C36.9156 13.3221 37.1911 13.1336 37.5015 13.0493C37.8119 12.9649 38.1402 12.9894 38.4361 13.1189C38.7319 13.2485 38.9792 13.476 39.1399 13.7666C39.3007 14.0573 39.3662 14.3951 39.3263 14.7284C39.3263 14.7534 39.3199 14.7776 39.316 14.8026L37.072 27.6684H45.7274C45.9677 27.6684 46.2031 27.7397 46.4063 27.874C46.6095 28.0083 46.7723 28.2001 46.8758 28.4273C46.9794 28.6544 47.0194 28.9077 46.9913 29.1576C46.9631 29.4076 46.868 29.6442 46.717 29.8399L29.2804 52.4167C29.1434 52.598 28.9691 52.7447 28.7705 52.8457C28.5719 52.9467 28.3541 52.9994 28.1334 53Z" fill="#F8F8F8"/>
                        </svg>  
                    </div>
                </div>
                <div className='app-bio'>
                    {
                        UserStore?.questionareList[currentId] ?
                        <div className='bio-info'>
                            <div className='bio-header'>
                                <h1 className='bio-name'>{JSON.stringify(UserStore.questionareList[currentId].firstname)}</h1>
                                <h1 className='bio-age'>{JSON.stringify(UserStore.questionareList[currentId].age)}</h1>
                            </div>
                            <p className='bio-about'>{JSON.stringify(UserStore.questionareList[currentId].about)}</p>
                            <h2>Цели в жизни</h2>
                            <div className='bio-item-list'>{JSON.stringify(UserStore.questionareList[currentId].goals)}</div>
                            <h2>Увлечения</h2>
                            {
                                UserStore.questionareList[currentId].hobbies.map((el, index) => {
                                    return (
                                        <div className='bio-item-list' id={index}>
                                            {JSON.stringify(el.hobby_name)}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className='bio-info'>
                            <h1>
                                Нет подходящих для поиска людей
                            </h1>
                        </div>
                    }

                </div>
            </div>
        </div>
            }
        </>
    )
})