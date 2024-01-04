import plusIcon from '@/assets/images/icon-plus.svg';
import minusIcon from '@/assets/images/icon-minus.svg';
import { useMediaQuery } from "react-responsive";


export default function LikesCounter({ score, onAddLike, onRemoveLike }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });

    const buttons = (
        <>
            <button
                className={ `btn btn--transparent-bordered 
                btn--transparent-bordered--${ isMobile ? 'right-flat' : 'bottom-flat' }` }
                onClick={ onAddLike }>
                <img src={ plusIcon } alt="An icon of a plus sign"/>
            </button>
            <p className='flexbox__item--align-self'>
                { score }
            </p>
            <button
                className={ `btn btn--transparent-bordered 
                btn--transparent-bordered--${ isMobile ? 'left-flat' : 'top-flat py-4' }` }
                onClick={ onRemoveLike }>
                <img src={ minusIcon } alt="An icon of a minus sign"/>
            </button>
        </>
    );

    return (
        <>
            { isMobile ?
                <div className='comments__container__counter'>
                    { buttons }
                </div>
                :
                <div className='comments__container__counter comments__container__counter--col'>
                    { buttons }
                </div>
            }
        </>

    );
}
