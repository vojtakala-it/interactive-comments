import deleteIcon from '@/assets/images/icon-delete.svg';
import editIcon from '@/assets/images/icon-edit.svg';
import LikesCounter from "../likes-counter/LikesCounter.jsx";


function BtnSection() {

    return (
            <div className='comment__comment-btn-section'>
                <LikesCounter/>
                <div className='comment__comment-btn-section__state-btns'>
                    <button className='btn btn--transparent f-red'>
                        <img className='comment__comment-btn-section__state-btns--delete'
                             src={ deleteIcon }
                             alt="An icon of a trash can implying a delete action"/>
                        Delete
                    </button>
                    <button className='btn btn--transparent f-blue'>
                        <img className='comment__comment-btn-section__state-btns--edit'
                             src={ editIcon }
                             alt="An icon of a pencil implying an edit action"/>
                        Edit
                    </button>
                </div>
            </div>
    )
}

export default BtnSection;
