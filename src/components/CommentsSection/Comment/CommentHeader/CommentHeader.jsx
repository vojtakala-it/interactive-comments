export default function CommentHeader({ avatar, userName, createdAt, activeUser }) {

    return (
            <div className='comments__comment__header'>
                <img src={ avatar } alt="User avatar"/>
                <h1>{ userName }</h1>
                { activeUser && <div className='comments__comment__header__active-user'>you</div> }
                <p>{ createdAt }</p>
            </div>
    )
}
