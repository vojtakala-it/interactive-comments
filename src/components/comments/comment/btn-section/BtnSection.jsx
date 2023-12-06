import deleteIcon from '@/assets/images/icon-delete.svg';
import editIcon from '@/assets/images/icon-edit.svg';
import replyIcon from '@/assets/images/icon-reply.svg';
import LikesCounter from "../likes-counter/LikesCounter.jsx";
import { useMediaQuery } from "react-responsive";


export default function BtnSection({ score, isReply }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });

    return (
            <div className='comment__comment-btn-section'>
                { isMobile && <LikesCounter score={ score }/> }
                { isReply ?
                        <button className='btn btn--transparent f-blue'>
                            <img
                                    className='comment__comment-btn-section__state-btns--reply'
                                    src={ replyIcon }
                                    alt="A backwards arrow implying a reply action"/>
                            Reply
                        </button> :
                        <div className='comment__comment-btn-section__state-btns'>
                            <button className='btn btn--transparent f-red'>
                                <img
                                        className='comment__comment-btn-section__state-btns--delete'
                                        src={ deleteIcon }
                                        alt="An icon of a trash can implying a delete action"/>
                                Delete
                            </button>
                            <button className='btn btn--transparent f-blue'>
                                <img
                                        className='comment__comment-btn-section__state-btns--edit'
                                        src={ editIcon }
                                        alt="An icon of a pencil implying an edit action"/>
                                Edit
                            </button>
                        </div>
                }
            </div>
    )
}
