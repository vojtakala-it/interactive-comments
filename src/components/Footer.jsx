function Footer() {
    const currentYear = new Date().getFullYear();

    return (
            <>
                <div className='flexbox flexbox--center-xy pxy-l bg-moderate-blue f-white gap-xs font-xs'>
                    <p className='f-medium'>
                        Copyright ©{ currentYear };
                    </p>
                    <p className='f-medium'>
                        Designed by{ ' ' }
                        <span className='f-regular'>
                            Frontend Mentor & Vojtěch Kala
                        </span>
                    </p>
                </div>
            </>
    );
}

export default Footer;
