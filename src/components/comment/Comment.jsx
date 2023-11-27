import './Comment.less';
import juliusomoAvatar from '@/assets/images/avatars/image-juliusomo.png';
import ButtonSection from "../shared/ButtonSection.jsx";


function Comment() {

    return (
        <div className="comment flexbox flexbox--col flexbox--gap pxy">
            <div>
                <img src={ juliusomoAvatar } alt="User avatar"/>
                <h1>juliusomo</h1>
                <div>you</div>
                <p>2 days ago</p>
            </div>
            <p>
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible.
                You've nailed the design and the responsiveness
                at various breakpoints works really well.
            </p>
            <ButtonSection />
        </div>
    );
}

export default Comment;
