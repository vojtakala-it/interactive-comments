import Comment from "./comment/Comment.jsx";
import TransitionComponent from "../utils/TransitionComponent.jsx";

export default function CommentsSection() {

    return (
            <TransitionComponent>
                <div className='comments-section'>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
            </TransitionComponent>
    );
}
