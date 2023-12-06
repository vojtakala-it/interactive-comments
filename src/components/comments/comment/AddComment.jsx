import { useMediaQuery } from "react-responsive";
import { useState } from "react";


export default function AddComment({ avatar, onAddComment }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });
    const [newComment, setNewComment] = useState('');
    const [id, setId] = useState(5);

    const handleSubmit = e => {
        e.preventDefault();

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

    return (
        <>
            { isMobile ?
                <form className='comment  w-100 comment--col' onSubmit={ handleSubmit }>
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
                <form className='comment  w-100' onSubmit={ handleSubmit }>
                    <img className='dimension-45px' src={ avatar } alt='User avatar'/>
                    <textarea
                        className='flexbox__item--grow-7 textarea'
                        rows='5'
                        placeholder='Add a comment...'
                        value={ newComment }
                        onChange={ e => setNewComment(e.target.value) }
                    />
                    <button className='btn btn--blue btn--send flexbox__item--grow'>SEND</button>
                </form>
            }
        </>
    );
}
