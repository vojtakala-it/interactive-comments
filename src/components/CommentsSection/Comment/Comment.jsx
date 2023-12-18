import './Comment.less';
import CommentHeader from "./CommentHeader/CommentHeader.jsx";
import { useMediaQuery } from "react-responsive";
import CommentBtns from "./CommentBtns/CommentBtns.jsx";
import LikesCounter from "./LikesCounter/LikesCounter.jsx";
import React, { useEffect, useState } from "react";


export default function Comment(
    {
        id,
        avatar,
        userName,
        content,
        createdAt,
        replyingTo,
        score,
        replies,
        activeUser,
        handleDeleteComment,
        handleSaveEditedComment,
        handleReply,
        setCommentBeingEdited,
        commentBeingEdited,
    }
) {
    const isMobile = useMediaQuery({ maxWidth: 568 });
    const [editedContent, setEditedContent] = useState(content);
    const [editedCommentId, setEditedCommentId] = useState(null);

    useEffect(() => {
        setEditedContent(content);

        if (!commentBeingEdited) {
            setEditedCommentId(null);
        }
    }, [content, commentBeingEdited]);

    const cancelEditing = () => {
        setCommentBeingEdited(false);
    };

    const saveEditing = editId => {
        setCommentBeingEdited(false);
        handleSaveEditedComment(editId, editedContent);
    };

    const commentHeader = (commentAvatar, commentUserName, commentCreatedAt) => (
        <CommentHeader
            avatar={ commentAvatar }
            userName={ commentUserName }
            createdAt={ commentCreatedAt }
            activeUser={ commentUserName === activeUser }
        />
    );

    const commentBtns = (commentId, commentScore, commentUserName, commentContent) => (
        <CommentBtns
            score={ commentScore }
            activeUser={ commentUserName === activeUser }
            onDeleteComment={ () => handleDeleteComment(commentId) }
            onEditComment={ () => {
                setEditedCommentId(commentId);
                setEditedContent(commentContent);
                setCommentBeingEdited(true);
            } }
            onReply={ () => handleReply(commentId) }
        />
    );

    const editingArea = commentId => (
        <>
            <textarea
                className='textarea textarea--edit'
                rows='5'
                value={ editedContent.replace(/^\s+/gm, '') }
                onChange={ e => setEditedContent(e.target.value) }
            />
            <div className='flexbox flexbox--center-x gap-xs mt-s'>
                <button className='btn btn--blue w-25' onClick={ () => saveEditing(commentId) }>
                    Save
                </button>
                <button className='btn btn--red w-25' onClick={ cancelEditing }>
                    Cancel
                </button>
            </div>
        </>
    );

    const commentContainer = (
        commentId = id,
        commentAvatar = avatar,
        commentUserName = userName,
        commentContent = content,
        commentCreatedAt = createdAt,
        commentReplyingTo = replyingTo,
        commentScore = score,
        commentIsReply = false,
    ) => (
        <>
            <div className={ `comments__container ${ isMobile && 'comments__container--col' }` }>
                { isMobile ?
                    <>
                        { commentHeader(commentAvatar, commentUserName, commentCreatedAt) }
                        { editedCommentId === commentId ? <div>{ editingArea(commentId) }</div> :
                            <p className='comments__container__message'>
                                { commentIsReply && <span className='f-bold f-blue'>@{ commentReplyingTo } </span> }
                                { commentContent }
                            </p>
                        }
                        { commentBtns(commentId, commentScore, commentUserName, commentContent) }
                    </>
                    :
                    <>
                        <LikesCounter score={ commentScore }/>
                        <div className='comments__container--col'>
                            <div className='flexbox flexbox--justify-between mb-s'>
                                { commentHeader(commentAvatar, commentUserName, commentCreatedAt) }
                                { commentBtns(commentId, commentScore, commentUserName, commentContent) }
                            </div>
                            { editedCommentId === commentId ? <div>{ editingArea(commentId) }</div> :
                                <p className='comments__container__message'>
                                    { commentIsReply && <span className='f-bold f-blue'>@{ commentReplyingTo } </span> }
                                    { commentContent }
                                </p>
                            }
                        </div>
                    </>
                }
            </div>
        </>
    );

    const commentReplies = (
        <div className="comments__reply-container">
            <div className='comments__reply-container__replies'>
                { replies.map((comment, index) => (
                    <React.Fragment key={ index }>
                        { commentContainer(
                            comment.id,
                            comment.avatar,
                            comment.userName,
                            comment.content,
                            comment.createdAt,
                            comment.replyingTo,
                            comment.score,
                            true,
                        ) }
                    </React.Fragment>
                )) }
            </div>
        </div>
    );

    return (
        <>
            { commentContainer() }
            { replies.length > 0 && commentReplies }
        </>
    );
}
