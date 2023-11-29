import plusIcon from '@/assets/images/icon-plus.svg';
import minusIcon from '@/assets/images/icon-minus.svg';


function LikesCounter() {
    let likes = 2;

    return (
            <div className='flexbox
            flexbox--align-items-y
            flexbox--space-between-x
            bg-very-light-gray
            radius
            f-blue f-medium
            px-xs
            width-m'
            >
                <button className='btn btn--transparent'>
                    <img src={ plusIcon }
                         alt="An icon of a plus sign"/>
                </button>
                <p>
                    { likes }
                </p>
                <button className='btn btn--transparent'>
                    <img src={ minusIcon }
                         alt="An icon of a minus sign"/>
                </button>
            </div>
    );
}

export default LikesCounter;
