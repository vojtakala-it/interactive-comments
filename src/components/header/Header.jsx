import { useMediaQuery } from "react-responsive";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const isMobile = useMediaQuery({ maxWidth: 900 });
    const navigate = useNavigate();


    return (
            <div className='header'>
                <p className='icon' onClick={ () => {
                    navigate('/login');
                } }>
                    { isMobile ? <FaPowerOff/> : 'Logout' }
                </p>
            </div>
    );
}
