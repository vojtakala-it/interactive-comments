import plusIcon from '@/assets/images/icon-plus.svg';
import minusIcon from '@/assets/images/icon-minus.svg';
import deleteIcon from '@/assets/images/icon-delete.svg';
import editIcon from '@/assets/images/icon-edit.svg';


function ButtonSection() {
    let likes = 2;

    return (
        <div>
            <div>
                <button>
                    <img src={ plusIcon }
                         alt="An icon of a plus sign"/>
                </button>
                { likes }
                <button>
                    <img src={ minusIcon }
                         alt="An icon of a minus sign"/>
                </button>
            </div>
            <button>
                <img src={ deleteIcon }
                     alt="An icon of a trash can implying a delete action"/>
                Delete
            </button>
            <button>
                <img src={ editIcon }
                     alt="An icon of a pencil implying an edit action"/>
                Edit
            </button>
        </div>
    )
}

export default ButtonSection;
