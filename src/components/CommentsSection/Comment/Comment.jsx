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
        score,
        replyingTo,
        parentCommentId,
        replies,
        activeUser,
        handleDeleteComment,
        handleSaveEditedComment,
        setCommentBeingEdited,
        commentBeingEdited,
        setCommentId,
        setCommentReplyUserName,
    }
) {
    const isMobile = useMediaQuery({ maxWidth: 568 });
    const [editedContent, setEditedContent] = useState(content);
    const [editedCommentId, setEditedCommentId] = useState(null);

    useEffect(() => {
        if (!commentBeingEdited) {
            setEditedCommentId(null);
        }
    }, [content, commentBeingEdited]);

    const cancelEditing = () => {
        setCommentBeingEdited(false);
    };

    const saveEditing = editId => {
        cancelEditing();
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

    const commentBtns = (
        commentId,
        commentUserName,
        commentContent,
        commentScore,
        commentParentCommentId
    ) => (
        <CommentBtns
            score={ commentScore }
            activeUser={ commentUserName === activeUser }
            onDeleteComment={ () => handleDeleteComment(commentId) }
            onEditComment={ () => {
                setEditedCommentId(commentId);
                setEditedContent(commentContent);
                setCommentBeingEdited(true);
            } }
            onReply={ () => {
                commentParentCommentId ? setCommentId(commentParentCommentId) : setCommentId(commentId);
                setCommentReplyUserName(commentUserName);
            } }
            onAddLike={ () => {
                setCommentId(commentId)
            } }
            onRemoveLike={ () => {
                setCommentId(commentId)
            } }
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
        commentScore = score,
        commentReplyingTo = replyingTo,
        commentParentCommentId = parentCommentId,
    ) => (
        <>
            <div className={ `comments__container ${ isMobile && 'comments__container--col' }` }>
                { isMobile ?
                    <>
                        { commentHeader(commentAvatar, commentUserName, commentCreatedAt) }
                        { editedCommentId === commentId ? <div>{ editingArea(commentId) }</div> :
                            <p className='comments__container__message'>
                                { commentParentCommentId &&
                                    <span className='f-bold f-blue'>@{ commentReplyingTo } </span> }
                                { commentContent }
                            </p>
                        }
                        { commentBtns(
                            commentId,
                            commentUserName,
                            commentContent,
                            commentScore,
                            commentParentCommentId
                        ) }
                    </>
                    :
                    <>
                        <LikesCounter score={ commentScore } onAddLike={ () => {
                            setCommentId(commentId)
                        } } onRemoveLike={ () => {
                            setCommentId(commentId)
                        } }/>
                        <div className='comments__container--col'>
                            <div className='flexbox flexbox--justify-between mb-s'>
                                { commentHeader(commentAvatar, commentUserName, commentCreatedAt) }
                                { commentBtns(
                                    commentId,
                                    commentUserName,
                                    commentContent,
                                    commentScore,
                                    commentParentCommentId
                                ) }
                            </div>
                            { editedCommentId === commentId ? <div>{ editingArea(commentId) }</div> :
                                <p className='comments__container__message'>
                                    { commentParentCommentId &&
                                        <span className='f-bold f-blue'>@{ commentReplyingTo } </span> }
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
                { replies.map(comment => (
                    <React.Fragment key={ comment.id }>
                        { commentContainer(
                            comment.id,
                            comment.avatar,
                            comment.userName,
                            comment.content,
                            comment.createdAt,
                            comment.score,
                            comment.replyingTo,
                            comment.parentCommentId,
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
