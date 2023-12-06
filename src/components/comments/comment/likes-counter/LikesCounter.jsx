import plusIcon from '@/assets/images/icon-plus.svg';
import minusIcon from '@/assets/images/icon-minus.svg';
import { useMediaQuery } from "react-responsive";


function LikesCounter({ score }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });

    const buttons = (
        <>
            <button className={
                `btn 
                btn--transparent-bordered 
                btn--transparent-bordered--${ isMobile ? 'right-flat' : 'bottom-flat' }`
            }>
                <img src={ plusIcon } alt="An icon of a plus sign"/>
            </button>
            <p className='flexbox__item--align-self'>
                { score }
            </p>
            <button className={
                `btn 
                btn--transparent-bordered 
                btn--transparent-bordered--${ isMobile ? 'left-flat' : 'top-flat py-4' }` }>
                <img src={ minusIcon } alt="An icon of a minus sign"/>
            </button>
        </>
    );

    return (
        <>
            { isMobile ?
                <div className='comment__comment-counter'>
                    { buttons }
                </div>
                :
                <div className='comment__comment-counter comment__comment-counter--col'>
                    { buttons }
                </div>
            }
        </>

    );
}

export default LikesCounter;
