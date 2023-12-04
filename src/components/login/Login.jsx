import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoadingComponent from "../utils/LoadingComponent.jsx";
import firebaseApp from "/src/firebase/firebase.js";
import { useNavigate } from "react-router-dom";
import TransitionComponent from "../utils/TransitionComponent.jsx";


export default function Login() {
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
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('');
    const navigate = useNavigate();

    const validateEmail = (inputEmail) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
        return emailRegex.test(inputEmail);
    };

    const validatePass = (inputPass) => {
        const passRegex = /^.{6,15}$/;
        return passRegex.test(inputPass);
    };

    useEffect(() => {
        if (isEmailFocused && isEmailDirty) {
            setIsValidEmail(validateEmail(email));
            setEmailErr(isValidEmail ? null : 'Invalid email format');
        }

        if (isPassFocused && isPassDirty) {
            setIsValidPass(validatePass(password));
            setPassErr(isValidPass ? null : 'Password must be at least 6 symbols long');
        }

        if (!loading) {
            setLoading(false);
        }

        if (action === 'signup' && loading) {
            setTimeout(() => {
                setLoadingText('Logging you in!');
            }, 2000);
        }

    }, [
        email, isValidEmail, isEmailFocused, isEmailDirty,
        password, isValidPass, isPassFocused, isPassDirty,
        action, loading,
    ]);

    const handleEmailChange = e => {
        setEmail(e.target.value.toLowerCase());
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
            setEmailErr('Invalid email inserted!');
            return;
        }

        if (password.length === 0) {
            setPassErr('No password inserted!');
            return;
        }

        try {
            const auth = getAuth(firebaseApp);
            if (action === 'signup') {
                await createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            setLoading(true);
                            setLoadingText('Signing you up!');

                            setTimeout(() => {
                                navigate('/comments');
                                setLoading(false);
                            }, 4000);
                        })
                        .catch(err => {
                            console.error("Error:", err.code, err.message);
                        });
            } else if (action === 'login') {
                await signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            setLoading(true);
                            setLoadingText('Logging you in!');

                            setTimeout(() => {
                                navigate('/comments');
                                setLoading(false);
                            }, 2000);
                        })
                        .catch(err => {
                            setLoginErr('Invalid email or password');
                            setPassword('');
                        });
            }
        } catch (err) {
            console.error("Error:", err.message);
        }
    };

    return (
            <TransitionComponent>
                { loading ? <LoadingComponent loadingText={ loadingText }/> :
                        <form className='flexbox flexbox--col form'
                              onSubmit={ handleSubmit }
                        >
                            <h1 className='f-center f-xxl'>LOGIN</h1>
                            <p className='mt-s f-grayish-blue'>Please enter your email and password!</p>
                            <hr/>
                            { emailErr && <p className='err-msg f-xs'>{ emailErr }</p> }
                            <input
                                    className={ `
                            form__input
                            ${ isValidEmail ? 'form__input--valid' : '' }
                            ${ emailErr ? 'form__input--invalid' : '' }
                            flexbox__item--align-self
                            f-center
                            w-85
                            mb-s
                            ` }
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
                                    className={ `
                    form__input 
                    ${ isValidPass ? 'form__input--valid' : '' }
                    ${ passErr ? 'form__input--invalid' : '' }
                    w-85 
                    flexbox__item--align-self 
                    f-center
                    ` }
                                    id='password'
                                    name='password'
                                    type='password'
                                    value={ password }
                                    placeholder='Password'
                                    onFocus={ handlePassFocus }
                                    onBlur={ handlePassBlur }
                                    onChange={ handlePassChange }
                            />
                            { loginErr && <p className='err-msg f-xs'>{ loginErr }</p> }
                            <hr/>
                            <button
                                    className='btn btn--blue btn--xl flexbox__item--align-self'
                                    type='submit'
                                    onClick={ () => setAction('login') }>
                                Login
                            </button>
                            <hr/>
                            <p className='f-center f-xs f-grayish-blue'>Don't have an account yet ?</p>
                            <button
                                    className='btn btn--red btn--xl flexbox__item--align-self mt-s'
                                    type='submit'
                                    onClick={ () => setAction('signup') }>
                                Sign Up
                            </button>
                        </form>
                }
            </TransitionComponent>
    );
}
