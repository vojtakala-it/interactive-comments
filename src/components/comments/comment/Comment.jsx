import './Comment.less';
import BtnSection from "./btn-section/BtnSection.jsx";
import HeaderSection from "./header-section/HeaderSection.jsx";


function Comment() {

    return (
        <div className='comment-section bg-white radius-l flexbox flexbox--col pxy-l r-gap-s'>
            <HeaderSection />
            <p className='f-grayish-blue'>
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible.
                You've nailed the design and the responsiveness
                at various breakpoints works really well.
            </p>
            <BtnSection />
        </div>
    );
}

export default Comment;
