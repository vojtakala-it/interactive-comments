import plusIcon from '@/assets/images/icon-plus.svg';
import minusIcon from '@/assets/images/icon-minus.svg';


function LikesCounter() {
    let likes = 2;

    return (
            <div className='flexbox
            flexbox--justify-evenly
            bg-very-light-gray
            f-blue f-medium
            py-xs
            width-m
            h-100
            radius-l'
            >
                <button className='btn btn--transparent'>
                    <img src={ plusIcon }
                         alt="An icon of a plus sign"/>
                </button>
                <p className='flexbox__item--align-self'>
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
