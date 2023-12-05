import { useMediaQuery } from "react-responsive";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();


    return (
            <div className='header'>
                <p className='header__icon' onClick={ () => {
                    navigate('/login');
                } }>
                    <FaPowerOff />
                </p>
            </div>
    );
}
