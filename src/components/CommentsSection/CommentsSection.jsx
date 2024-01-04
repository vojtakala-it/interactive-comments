import Comment from "./Comment/Comment.jsx";
import TransitionComponent from "../utils/TransitionComponent.jsx";
import juliusomo from '@/assets/images/avatars/image-juliusomo.png';
import ramsesmiron from '@/assets/images/avatars/image-ramsesmiron.png';
import maxblagun from '@/assets/images/avatars/image-maxblagun.png';
import amyrobson from '@/assets/images/avatars/image-amyrobson.png';
import { useEffect, useState } from "react";
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
                id: '1x45as',
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
                id: '2x56xy',
                avatar: maxblagun,
                userName: 'maxblagun',
                content: maxContent,
                createdAt: '2 weeks ago',
                score: 5,
                replyingTo: null,
                parentCommentId: null,
                replies: [
                    {
                        id: '2x56xy-1sx4',
                        avatar: ramsesmiron,
                        userName: 'ramsesmiron',
                        content: ramContent,
                        createdAt: '1 weeks ago',
                        score: 4,
                        replyingTo: 'maxblagun',
                        parentCommentId: '2x56xy',
                        replies: [],
                    },
                    {
                        id: '2x56xy-2sa7',
                        avatar: juliusomo,
                        userName: 'juliusomo',
                        content: julContent,
                        createdAt: '2 days ago',
                        score: 2,
                        replyingTo: 'ramsesmiron',
                        parentCommentId: '2x56xy',
                        replies: [],
                    }
                ],
            },
        ] : []
    );

    const [commentBeingEdited, setCommentBeingEdited] = useState(false);
    const [commentId, setCommentId] = useState(null);
    const [commentReplyUserName, setCommentReplyUserName] = useState(null);

    // TODO: here the init state will be fetched from database for each user
    const [userInteractions, setUserInteractions] = useState([
        {
            commentId: '1',
            canIncrement: true,
        }
    ]);

    // useEffect(() => {
    //
    // }, [commentId]);

    const handleAddComment = (newlyCreatedComment, replyUserName = null) => {
        setCommentBeingEdited(false);

        if (replyUserName) {
            setComments(prevComments => {
                return addReply(prevComments, newlyCreatedComment)
            });
        } else {
            setComments(prevComments => [newlyCreatedComment, ...prevComments]);
        }

        setCommentReplyUserName(null);
        setCommentId(null);
    };

    const addReply = (commentsArray, newlyCreatedComment) => {
        return commentsArray.map(comment => {
            if (comment.id === commentId || comment.parentCommentId === commentId) {
                return {
                    ...comment,
                    replies: [...comment.replies, newlyCreatedComment]
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

    const updateCommentScore = (commentsArray, commentId, increment = true) => {
        return commentsArray.map(comment => {
            if (comment.id === commentId) {

                const newScore = increment ? ++comment.score : --comment.score;

                return {
                    ...comment,
                    score: newScore,
                };
            } else {
                return comment;
            }
        })
    };

    function updateInteractions() {
        const userInteraction = userInteractions.find(
            interaction => interaction.commentId === commentId
        );

        if (!userInteraction) {
            const newInteraction = {
                commentId: commentId,
                canIncrement: true,
            }

            setUserInteractions((prevInteractions => [...prevInteractions, newInteraction]));
            return newInteraction;
        }

        return userInteraction;
    }

    function handleAddLike() {
        const interaction = updateInteractions(commentId);

        if (interaction.canIncrement) {
            setUserInteractions(prevInteractions => {
                return prevInteractions.map(prevInteraction => {
                    if (prevInteraction.commentId === commentId) {
                        return {
                            ...prevInteraction,
                            canIncrement: !interaction.canIncrement,
                        }
                    }
                });
            });
            setComments(prevComments =>
                updateCommentScore(prevComments, commentId)
            );
        }
    }

    function handleRemoveLike() {
        const interaction = updateInteractions(commentId);

        if (!userInteractions.canIncrement) {
            setUserInteractions(prevInteractions => {
                return prevInteractions.map(interactions => {
                    if (interactions.commentId === commentId) {
                        return {
                            ...interactions,
                            canIncrement: !!interaction.canIncrement,
                        }
                    }
                });
            });
            setComments(prevComments =>
                updateCommentScore(prevComments, commentId, false)
            );
        }
    }

    return (
        <TransitionComponent>
            <div className='comments'>
                { comments.map(comment => (
                    <Comment
                        key={ comment.id }
                        { ...comment }
                        activeUser={ user }
                        handleDeleteComment={ handleDeleteComment }
                        handleSaveEditedComment={ handleSaveEditedComment }
                        setCommentBeingEdited={ setCommentBeingEdited }
                        commentBeingEdited={ commentBeingEdited }
                        setCommentId={ setCommentId }
                        setCommentReplyUserName={ setCommentReplyUserName }
                        handleAddLike={ handleAddLike }
                        handleRemoveLike={ handleRemoveLike }
                    />
                )) }
                <ActiveUserSection
                    avatar={ juliusomo }
                    handleAddComment={ handleAddComment }
                    user={ user }
                    replyUserName={ commentReplyUserName }
                    parentCommentId={ commentId }
                />
            </div>
        </TransitionComponent>
    );
}
