export default function HeaderSection({ avatar, userName, createdAt, activeUser }) {

    return (
            <div className='comment__comment-header'>
                <img src={ avatar } alt="User avatar"/>
                <h1>{ userName }</h1>
                { activeUser && <div className='comment__comment-header__active-user'>you</div> }
                <p>{ createdAt }</p>
            </div>
    )
}
