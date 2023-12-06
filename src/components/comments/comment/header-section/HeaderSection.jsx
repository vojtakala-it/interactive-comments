export default function HeaderSection({ avatar, userName, createdAt }) {
    const userIsActive = true;

    return (
            <div className='comment__comment-header'>
                <img src={ avatar } alt="User avatar"/>
                <h1>{ userName }</h1>
                { userIsActive && <div className='comment__comment-header__active-user'>you</div> }
                <p>{ createdAt }</p>
            </div>
    )
}
