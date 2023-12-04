import deleteIcon from '@/assets/images/icon-delete.svg';
import editIcon from '@/assets/images/icon-edit.svg';
import LikesCounter from "../likes-counter/LikesCounter.jsx";


function BtnSection() {

    return (
            <div className='flexbox flexbox--justify-between mt-s'>
                <LikesCounter/>
                <div className='flexbox'>
                    <button className='btn btn--transparent f-red'>
                        <img src={ deleteIcon }
                             alt="An icon of a trash can implying a delete action"/>
                        Delete
                    </button>
                    <button className='btn btn--transparent f-blue'>
                        <img src={ editIcon }
                             alt="An icon of a pencil implying an edit action"/>
                        Edit
                    </button>
                </div>
            </div>
    )
}

export default BtnSection;
