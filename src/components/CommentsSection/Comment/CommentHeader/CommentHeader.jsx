export default function CommentHeader({ avatar, userName, createdAt, activeUser }) {

    return (
            <div className='comments__container__header'>
                <img src={ avatar } alt="User avatar"/>
                <h1>{ userName }</h1>
                { activeUser && <div className='comments__container__header__active'>you</div> }
                <p>{ createdAt }</p>
            </div>
    )
}
