import './Comment.less';
import HeaderSection from "./header-section/HeaderSection.jsx";
import { useMediaQuery } from "react-responsive";
import BtnSection from "./btn-section/BtnSection.jsx";
import LikesCounter from "./likes-counter/LikesCounter.jsx";


export default function Comment({ userName, content, score, avatar, createdAt }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });

    return (
            <>
                { isMobile ?
                        <>
                            <div className='comment comment--col'>
                                <HeaderSection avatar={ avatar } userName={ userName } createdAt={ createdAt }/>
                                <p className='comment__comment-message'>
                                    { content }
                                </p>
                                <BtnSection score={ score }/>
                            </div>
                        </> :
                        <>
                            <div className='comment'>
                                <LikesCounter score={ score }/>
                                <div className='comment--col'>
                                    <div className='flexbox flexbox--justify-between mb-m'>
                                        <HeaderSection avatar={ avatar } userName={ userName } createdAt={ createdAt }/>
                                        <BtnSection/>
                                    </div>
                                    <p className='comment__comment-message'>
                                        { content }
                                    </p>
                                </div>
                            </div>
                        </>
                }
            </>
    );
}
