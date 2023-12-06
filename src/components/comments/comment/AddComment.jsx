import { useMediaQuery } from "react-responsive";


export default function AddComment({ avatar }) {
    const isMobile = useMediaQuery({ maxWidth: 568 });

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            { isMobile ?
                <form className='comment  w-100 comment--col' onSubmit={ handleSubmit }>
                    <textarea className='flexbox__item--grow-7 textarea mb-s' rows='5' placeholder='Add a comment...'/>
                    <div className='flexbox flexbox--justify-between'>
                        <img className='dimension-45px' src={ avatar } alt='User avatar'/>
                        <button className='btn btn--blue btn--send w-100px'>SEND</button>
                    </div>
                </form>
                :
                <form className='comment  w-100' onSubmit={ handleSubmit }>
                    <img className='dimension-45px' src={ avatar } alt='User avatar'/>
                    <textarea className='flexbox__item--grow-7 textarea' rows='5' placeholder='Add a comment...'/>
                    <button className='btn btn--blue btn--send flexbox__item--grow'>SEND</button>
                </form>
            }
        </>

    );
}
