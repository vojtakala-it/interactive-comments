import juliusomoAvatar from '@/assets/images/avatars/image-juliusomo.png';


function HeaderSection() {
    const userName = 'juliusomo';

    return (
            <div className='flexbox flexbox--center-y gap-xs'>
                <img src={ juliusomoAvatar } alt="User avatar" className='max-width-15' />
                <h1>{ userName }</h1>
                <div className='bg-moderate-blue px-s py-xs radius-s f-white'>you</div>
                <p className='f-grayish-blue'>2 days ago</p>
            </div>
    )
}

export default HeaderSection;
