import Comment from "./comment/Comment.jsx";
import TransitionComponent from "../utils/TransitionComponent.jsx";
import juliusomo from '@/assets/images/avatars/image-juliusomo.png';
import ramsesmiron from '@/assets/images/avatars/image-ramsesmiron.png';
import maxblagun from '@/assets/images/avatars/image-maxblagun.png';
import amyrobson from '@/assets/images/avatars/image-amyrobson.png';
import { useState } from "react";
import UserAddCommentSection from "./comment/UserAddCommentSection.jsx";
import CommentSlider from "../utils/CommentSlider.jsx";


export default function CommentsSection() {

    const amyContent = `
    Impressive! Though it seems the drag feature could be improved. 
    But overall it looks incredible. You've nailed the design and the responsiveness
    at various breakpoints works really well.
    `;

    const maxContent = `
    Woah, your project looks awesome! How long have you been coding for? 
    I'm still new, but think I want to dive into React as well soon. 
    Perhaps you can give me an insight on where I can learn React? Thanks!
    `;

    const julContent = `
    I couldn't agree more with this. 
    Everything moves so fast and it always seems 
    like everyone knows the newest library/framework. 
    But the fundamentals are what stay constant.
    `;

    const ramContent = `
    If you're still new, I'd recommend focusing on the fundamentals of HTML,
    CSS, and JS before considering React. 
    It's very tempting to jump ahead but lay a solid foundation first.
    `;

    const [comments, setComments] = useState([
        {
            id: 1,
            avatar: amyrobson,
            userName: 'amyrobson',
            content: amyContent,
            createdAt: '1 month ago',
            activeUser: false,
            isReply: false,
            replyingTo: null,
            score: 12,
        },
        {
            id: 2,
            avatar: maxblagun,
            userName: 'maxblagun',
            content: maxContent,
            createdAt: '2 weeks ago',
            activeUser: false,
            isReply: false,
            replyingTo: null,
            score: 5,
        },
        {
            id: 3,
            avatar: ramsesmiron,
            userName: 'ramsesmiron',
            content: ramContent,
            createdAt: '1 weeks ago',
            activeUser: false,
            isReply: true,
            replyingTo: 'maxblagun',
            score: 4,
        },
        {
            id: 4,
            avatar: juliusomo,
            userName: 'juliusomo',
            content: julContent,
            createdAt: '2 days ago',
            activeUser: true,
            isReply: true,
            replyingTo: 'ramsesmiron',
            score: 2,
        },
    ]);

    const handleAddComment = newComment => {
        setComments([newComment, ...comments]);
    };

    const handleDeleteComment = commentId => {
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        setComments(updatedComments);
    }

    const handleEditComment = (commentId, newContent) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === commentId) {
                return { ...comment, content: newContent };
            }
            return comment;
        });

        setComments(updatedComments);
    }

    return (
            <TransitionComponent>
                <div className='comments-section'>
                    { comments.map((comment, index) => (
                            // TODO: Add animation for mobile screen from top to bottom
                            <CommentSlider key={ index } index={ index }>
                                <Comment
                                        key={ index }
                                        { ...comment }
                                        handleDeleteComment={ handleDeleteComment }
                                        handleEditComment={ handleEditComment }
                                />
                            </CommentSlider>
                    )) }
                    <CommentSlider index={ comments.length }>
                        <UserAddCommentSection
                                avatar={ juliusomo }
                                onAddComment={ handleAddComment }

                        />
                    </CommentSlider>
                </div>
            </TransitionComponent>
    );
}
