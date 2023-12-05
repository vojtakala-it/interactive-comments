import juliusomoAvatar from '@/assets/images/avatars/image-juliusomo.png';


export default function HeaderSection() {
    const userName = 'juliusomo';
    const userIsActive = true;

    return (
            <div className='comment__comment-header'>
                <img src={ juliusomoAvatar } alt="User avatar" />
                <h1>{ userName }</h1>
                { userIsActive && <div className='comment__comment-header__active-user'>you</div> }
                <p>2 days ago</p>
            </div>
    )
}
