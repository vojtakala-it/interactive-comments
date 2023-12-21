import Comment from "./Comment/Comment.jsx";
import TransitionComponent from "../utils/TransitionComponent.jsx";
import juliusomo from '@/assets/images/avatars/image-juliusomo.png';
import ramsesmiron from '@/assets/images/avatars/image-ramsesmiron.png';
import maxblagun from '@/assets/images/avatars/image-maxblagun.png';
import amyrobson from '@/assets/images/avatars/image-amyrobson.png';
import { useState } from "react";
import ActiveUserSection from "./Comment/ActiveUserSection.jsx";
import { useAuth } from "../Auth/AuthContext.jsx";


export default function CommentsSection() {
    const { user } = useAuth();

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

    const [comments, setComments] = useState(user === 'juliusomo' ? [
            {
                id: '1',
                avatar: amyrobson,
                userName: 'amyrobson',
                content: amyContent,
                createdAt: '1 month ago',
                score: 12,
                replyingTo: null,
                parentCommentId: null,
                replies: [],
            },
            {
                id: '2',
                avatar: maxblagun,
                userName: 'maxblagun',
                content: maxContent,
                createdAt: '2 weeks ago',
                score: 5,
                replyingTo: null,
                parentCommentId: null,
                replies: [
                    {
                        id: '2-1',
                        avatar: ramsesmiron,
                        userName: 'ramsesmiron',
                        content: ramContent,
                        createdAt: '1 weeks ago',
                        score: 4,
                        replyingTo: 'maxblagun',
                        parentCommentId: '2',
                        replies: [],
                    },
                    {
                        id: '2-2',
                        avatar: juliusomo,
                        userName: 'juliusomo',
                        content: julContent,
                        createdAt: '2 days ago',
                        score: 2,
                        replyingTo: 'ramsesmiron',
                        parentCommentId: '2',
                        replies: [],
                    }
                ],
            },
        ] : []
    );

    const [commentBeingEdited, setCommentBeingEdited] = useState(false);
    const [commentReplyId, setCommentReplyId] = useState(null);
    const [commentReplyUserName, setCommentReplyUserName] = useState(null);

    const handleAddComment = (newComment, replyUserName = null) => {
        setCommentBeingEdited(false);

        if (replyUserName) {
            setComments(prevComments => {
                return addReply(prevComments, newComment)
            });
        } else {
            setComments(prevComments => [newComment, ...prevComments]);
        }

        setCommentReplyUserName(null);
        setCommentReplyId(null);
    };

    const addReply = (commentsArray, newComment) => {
        return commentsArray.map(comment => {
            if (comment.id === commentReplyId || comment.parentCommentId === commentReplyId) {
                return {
                    ...comment,
                    replies: [...comment.replies, newComment]
                };
            } else {
                return comment;
            }
        });
    };

    const findAndDeleteComment = (commentsArray, commentId) => {
        return commentsArray.reduce((acc, comment) => {
            if (comment.id === commentId) {
                return acc;
            } else if (comment.replies && comment.replies.length > 0) {
                return [
                    ...acc,
                    {
                        ...comment,
                        replies: findAndDeleteComment(comment.replies, commentId),
                    },
                ];
            } else {
                return [...acc, comment];
            }
        }, []);
    };

    const handleDeleteComment = commentId => {
        setCommentBeingEdited(false);
        setComments(prevComments =>
            findAndDeleteComment(prevComments, commentId));
    }

    const findAndSaveEditedComment = (commentsArray, commentId, newContent) => {
        return commentsArray.map(comment => {
            if (comment.id === commentId) {
                return { ...comment, content: newContent };
            } else if (comment.replies && comment.replies.length > 0) {
                return {
                    ...comment,
                    replies: findAndSaveEditedComment(comment.replies, commentId, newContent)
                };
            } else {
                return comment;
            }
        });
    };

    const handleSaveEditedComment = (commentId, newContent) => {
        setComments(prevComments =>
            findAndSaveEditedComment(prevComments, commentId, newContent)
        );
    };

    return (
        <TransitionComponent>
            <div className='comments'>
                { comments.map((comment, index) => (
                    <Comment
                        key={ index }
                        { ...comment }
                        activeUser={ user }
                        handleDeleteComment={ handleDeleteComment }
                        handleSaveEditedComment={ handleSaveEditedComment }
                        setCommentBeingEdited={ setCommentBeingEdited }
                        commentBeingEdited={ commentBeingEdited }
                        setCommentReplyId={ setCommentReplyId }
                        setCommentReplyUserName={ setCommentReplyUserName }
                    />
                )) }
                <ActiveUserSection
                    avatar={ juliusomo }
                    handleAddComment={ handleAddComment }
                    user={ user }
                    replyUserName={ commentReplyUserName }
                    parentCommentId={ commentReplyId }
                />
            </div>
        </TransitionComponent>
    );
}
