import './Comment.less';
import HeaderSection from "./header-section/HeaderSection.jsx";
import { useMediaQuery } from "react-responsive";
import BtnSection from "./btn-section/BtnSection.jsx";
import LikesCounter from "./likes-counter/LikesCounter.jsx";


export default function Comment({ userName, content, score, avatar, createdAt, activeUser, isReply, replyingTo }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });

    return (
            <>
                { isMobile ?
                        <>
                            <div className='comment comment--col'>
                                <HeaderSection
                                        avatar={ avatar }
                                        userName={ userName }
                                        createdAt={ createdAt }
                                        activeUser={ activeUser }/>
                                <p className='comment__comment-message'>
                                    { isReply && <span className='f-bold f-blue'>@{ replyingTo }</span> }
                                    { content }
                                </p>
                                <BtnSection score={ score } activeUser={ activeUser }/>
                            </div>
                        </> :
                        <>
                            <div className='comment'>
                                <LikesCounter score={ score }/>
                                <div className='comment--col'>
                                    <div className='flexbox flexbox--justify-between mb-s'>
                                        <HeaderSection
                                                avatar={ avatar }
                                                userName={ userName }
                                                createdAt={ createdAt }
                                                activeUser={ activeUser }/>
                                        <BtnSection activeUser={ activeUser }/>
                                    </div>
                                    <p className='comment__comment-message'>
                                        { isReply && <span className='f-bold f-blue'>@{ replyingTo }</span> }
                                        { content }
                                    </p>
                                </div>
                            </div>
                        </>
                }
            </>
    );
}
