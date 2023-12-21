import deleteIcon from '@/assets/images/icon-delete.svg';
import editIcon from '@/assets/images/icon-edit.svg';
import replyIcon from '@/assets/images/icon-reply.svg';
import LikesCounter from "../LikesCounter/LikesCounter.jsx";
import { useMediaQuery } from "react-responsive";


export default function CommentBtns({ score, activeUser, onDeleteComment, onEditComment, onReply }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });

    return (
            <div className='comments__container__btns'>
                { isMobile && <LikesCounter score={ score }/> }
                { activeUser ?
                        <div className='comments__container__btns__action'>
                            <button
                                    onClick={ onDeleteComment }
                                    className='btn btn--transparent f-red'>
                                <img
                                        className='comments__container__btns__action--delete'
                                        src={ deleteIcon }
                                        alt="An icon of a trash can implying a delete action"/>
                                Delete
                            </button>
                            <button
                                    onClick={ onEditComment }
                                    className='btn btn--transparent f-blue'>
                                <img
                                        className='comments__container__btns__action--edit'
                                        src={ editIcon }
                                        alt="An icon of a pencil implying an edit action"/>
                                Edit
                            </button>
                        </div> :
                        <button
                            onClick={ onReply }
                            className='btn btn--transparent f-blue'>
                            <img
                                    className='comments__container__btns__action--reply'
                                    src={ replyIcon }
                                    alt="A backwards arrow implying a reply action"/>
                            Reply
                        </button>
                }
            </div>
    )
}
