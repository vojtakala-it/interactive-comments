import { useMediaQuery } from "react-responsive";


export default function Footer() {
    const isMobile = useMediaQuery({ maxWidth: 900 });

    const currentYear = new Date().getFullYear();

    return (
            <div className='footer'>
                <p className='f-medium'>
                    Copyright ©{ currentYear }
                    { isMobile ? '' : ';' }
                </p>
                <p className='f-medium'>
                    Designed by{ ' ' }
                    <span className='f-regular'>
                        Vojtěch Kala & Frontend Mentor
                    </span>
                </p>
            </div>
    );
}
