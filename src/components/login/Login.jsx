import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "/src/firebase/firebase.js";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [action, setAction] = useState('login');
    const [loginErr, setLoginErr] = useState(null);
    const [emailErr, setEmailErr] = useState(null);
    const [passErr, setPassErr] = useState(null);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isEmailDirty, setIsEmailDirty] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isValidPass, setIsValidPass] = useState(false);
    const [isPassFocused, setIsPassFocused] = useState(false);
    const [isPassDirty, setIsPassDirty] = useState(false);

    const validateEmail = (inputEmail) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
        return emailRegex.test(inputEmail);
    };

    const validatePass = (inputPass) => {
        const passRegex = /^.{3,15}$/;
            return passRegex.test(inputPass);
    };

    useEffect(() => {
        if (isEmailFocused && isEmailDirty) {
            setIsValidEmail(validateEmail(email));
            setEmailErr(isValidEmail ? null : 'Invalid email format');
        }

        if (isPassFocused && isPassDirty) {
            setIsValidPass(validatePass(password));
            setPassErr(isValidPass ? null : 'Password must be at least 3 symbols long');
        }

        }, [
        email, isValidEmail, isEmailFocused, isEmailDirty,
        password, isValidPass, isPassFocused, isPassDirty,
    ]);

    const handleEmailChange = e => {
        setEmail(e.target.value);
        setIsEmailDirty(true);
    };

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    };

    const handlePassChange = e => {
        setPassword(e.target.value);
        setIsPassDirty(true);
    };

    const handlePassFocus = () => {
        setIsPassFocused(true);
    };

    const handlePassBlur = () => {
        setIsPassFocused(false);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailErr('Invalid email format');
            return;
        }

        try {
            const auth = getAuth(firebaseApp);
            if (action === 'signup') {
                await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                    })
                    .catch(err => {
                        console.error("Error:", err.code, err.message);
                    });
            } else if (action === 'login') {
                await signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                    })
                    .catch(err => {
                        if (err.code === 'auth/invalid-login-credentials') {
                            setLoginErr('Invalid email or password');
                            setPassword('');
                        }
                    });
            }
        } catch (err) {
            console.error("Error:", err.message);
        }
    };

    return (
        <form className='flexbox flexbox--col form'
              onSubmit={ handleSubmit }
        >
            <h1 className='center-font f-xxl'>LOGIN</h1>
            <p className='mt-s f-grayish-blue'>Please enter your email and password!</p>
            <hr/>
            { emailErr && <p className='err-msg f-xs'>{ emailErr }</p> }
            <input
                className={`
                        form__input
                        ${ isValidEmail ? 'form__input--valid' : '' }
                        ${ emailErr ? 'form__input--invalid' : '' }
                        flexbox__item--center-self
                        center-font
                        w-85
                        mb-s
                        `}
                id='email'
                name='email'
                type='email'
                value={ email }
                placeholder='Email'
                onFocus={ handleEmailFocus }
                onBlur={ handleEmailBlur }
                onChange={ handleEmailChange }
            />
            { passErr && <p className='err-msg f-xs mt-s'>{ passErr }</p> }
            <input
                className={`
                form__input 
                ${ isValidPass ? 'form__input--valid' : '' }
                w-85 
                flexbox__item--center-self 
                center-font
                `}
                id='password'
                name='password'
                type='password'
                value={ password }
                placeholder='Password'
                onFocus={ handlePassFocus }
                onBlur={ handlePassBlur }
                onChange={ handlePassChange }
            />
            { loginErr && <p className='err-msg f-s'>{ loginErr }</p> }
            <hr/>
            <button
                className='btn btn--primary w-50 flexbox__item--center-self'
                type='submit'
                onClick={ () => setAction('login') }>
                Login
            </button>
            <hr/>
            <p className='center-font f-xs f-grayish-blue'>Don't have an account yet ?</p>
            <button
                className='btn btn--secondary w-50 flexbox__item--center-self mt-s'
                type='submit'
                onClick={ () => setAction('signup') }>
                Sign Up
            </button>
        </form>
    );
}

export default Login;
