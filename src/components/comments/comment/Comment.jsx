import './Comment.less';
import HeaderSection from "./header-section/HeaderSection.jsx";
import { useMediaQuery } from "react-responsive";
import BtnSection from "./btn-section/BtnSection.jsx";
import LikesCounter from "./likes-counter/LikesCounter.jsx";
import { useEffect, useState } from "react";


export default function Comment({
                                    id,
                                    avatar,
                                    userName,
                                    content,
                                    createdAt,
                                    activeUser,
                                    isReply,
                                    replyingTo,
                                    score,
                                    handleDeleteComment,
                                    handleEditComment,
                                }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });
    const [editedContent, setEditedContent] = useState(content);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        setEditedContent(content);
    }, [content]);

    const startEditing = () => {
        setEditing(true);
    };

    const cancelEditing = () => {
        setEditing(false);
        setEditedContent(content);
    };

    const saveEditing = () => {
        handleEditComment(id, editedContent);
        setEditing(false);
    };

    return (
            <>
                { isMobile ?
                        <>
                            <div className='comment comment--col'>
                                <HeaderSection
                                        avatar={ avatar }
                                        userName={ userName }
                                        createdAt={ createdAt }
                                        activeUser={ activeUser }/>
                                { editing ? (
                                        <div>
                                <textarea
                                        className='textarea textarea--edit'
                                        rows='5'
                                        value={ editedContent.replace(/^\s+/gm, '') }
                                        onChange={ e => setEditedContent(e.target.value) }
                                />
                                            <div className='flexbox flexbox--center-x gap-xs mt-s'>
                                                <button
                                                        className='btn btn--blue w-25'
                                                        onClick={ saveEditing }
                                                >
                                                    Save
                                                </button>
                                                <button
                                                        className='btn btn--red w-25'
                                                        onClick={ cancelEditing }
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                ) : (
                                        <p className='comment__comment-message'>
                                            { isReply && <span className='f-bold f-blue'>@{ replyingTo } </span> }
                                            { content }
                                        </p>
                                ) }
                                <BtnSection score={ score } activeUser={ activeUser }
                                            onDeleteComment={ () => handleDeleteComment(id) }
                                            onEditComment={ () => startEditing }
                                />

                            </div>
                        </>
                        :
                        <>
                            <div className='comment'>
                                <LikesCounter score={ score }/>
                                <div className='comment--col'>
                                    <div className='flexbox flexbox--justify-between mb-s'>
                                        <HeaderSection
                                                avatar={ avatar }
                                                userName={ userName }
                                                createdAt={ createdAt }
                                                activeUser={ activeUser }/>
                                        <BtnSection
                                                activeUser={ activeUser }
                                                onDeleteComment={ () => handleDeleteComment(id) }
                                                onEditComment={ () => startEditing }
                                        />
                                    </div>
                                    { editing ? (
                                            <div>
                                        <textarea
                                                className='textarea textarea--edit'
                                                rows='5'
                                                value={ editedContent.replace(/^\s+/gm, '') }
                                                onChange={ e => setEditedContent(e.target.value) }
                                        />
                                                <div className='flexbox flexbox--center-x gap-xs mt-s'>
                                                    <button
                                                            className='btn btn--blue w-25'
                                                            onClick={ saveEditing }
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                            className='btn btn--red w-25'
                                                            onClick={ cancelEditing }
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                    ) : (
                                            <p className='comment__comment-message'>
                                                { isReply &&
                                                        <span className='f-bold f-blue'>@{ replyingTo } </span> }
                                                { content }
                                            </p>
                                    ) }
                                </div>
                            </div>
                        </>
                }
            </>
    );
}
