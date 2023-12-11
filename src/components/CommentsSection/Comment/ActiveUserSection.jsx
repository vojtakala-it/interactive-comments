import { useMediaQuery } from "react-responsive";
import { useState } from "react";


export default function ActiveUserSection({ avatar, onAddComment }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });
    const [newComment, setNewComment] = useState('');
    const [commentInvalid, setCommentInvalid] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [id, setId] = useState(5);

    const handleSubmit = e => {
        e.preventDefault();

        setCommentInvalid(validateComment());

        const createdComment = {
            id: id,
            avatar: avatar,
            userName: 'juliusomo',
            content: newComment,
            createdAt: 'just now',
            activeUser: true,
            isReply: false,
            replyingTo: null,
            score: 0,
        };

        onAddComment(createdComment);
        setNewComment('');
        setId(id + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function validateComment() {
        if (!newComment || newComment.length === 0) {
            setErrMsg('Sorry, cannot send an empty comment, please write something, thank you!');
            return false;
        } else {
            setErrMsg('');
            return true;
        }
    }

    return (
            <>
                { isMobile ?
                        <form className='comments__container  w-100 comments__container--col' onSubmit={ handleSubmit }>
                    <textarea
                            className='flexbox__item--grow-7 textarea mb-s'
                            rows='5'
                            placeholder='Add a comment...'
                            value={ newComment }
                            onChange={ e => setNewComment(e.target.value) }
                    />
                            <div className='flexbox flexbox--justify-between'>
                                <img className='dimension-45px' src={ avatar } alt='User avatar'/>
                                <button className='btn btn--blue btn--send w-100px'>SEND</button>
                            </div>
                        </form>
                        :
                        <>
                            { commentInvalid && <p className='err-msg'>{ errMsg }</p> }
                            <form className='comments__container  w-100' onSubmit={ handleSubmit }>
                                <img className='dimension-45px' src={ avatar } alt='User avatar'/>
                                <textarea
                                        className='flexbox__item--grow-7 textarea'
                                        rows='5'
                                        placeholder='Add a comment...'
                                        onChange={ e => setNewComment(e.target.value) }
                                        value={ newComment }
                                >
                    </textarea>
                                <button className='btn btn--blue btn--send flexbox__item--grow'>SEND</button>
                            </form>
                        </>
                }
            </>
    );
}
