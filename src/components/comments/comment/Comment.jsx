import './Comment.less';
import HeaderSection from "./header-section/HeaderSection.jsx";
import { useMediaQuery } from "react-responsive";
import BtnSection from "./btn-section/BtnSection.jsx";
import LikesCounter from "./likes-counter/LikesCounter.jsx";


export default function Comment() {
    const isMobile = useMediaQuery({ maxWidth: 568 });
    const message = `
                            Impressive! Though it seems the drag feature could be improved.
                            But overall it looks incredible.
                            You've nailed the design and the responsiveness
                            at various breakpoints works really well.
    `;

    return (
        <>
            { isMobile ?
                <>
                    <div className='comment comment--col'>
                        <HeaderSection/>
                        <p className='comment__comment-message'>
                            { message }
                        </p>
                        <BtnSection/>
                    </div>
                </> :
                <>
                    <div className='comment'>
                        <LikesCounter/>
                        <div className='comment--col'>
                            <div className='flexbox flexbox--justify-between mb-m'>
                                <HeaderSection/>
                                <BtnSection/>
                            </div>
                            <p className='comment__comment-message'>
                                { message }
                            </p>
                        </div>
                    </div>
                </>
            }
        </>
    );
}
