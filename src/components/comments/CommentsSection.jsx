import Comment from "./comment/Comment.jsx";
import Header from "../header/Header.jsx";
import TransitionComponent from "../utils/TransitionComponent.jsx";

export default function CommentsSection() {

    return (
            <>
                <TransitionComponent>
                    <Header />
                </TransitionComponent>
                <TransitionComponent>
                    <div>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </div>
                </TransitionComponent>
            </>
    );
}
