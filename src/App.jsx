import './App.less'
import Footer from "./components/Footer/Footer.jsx";
import TransitionComponent from "./components/utils/TransitionComponent.jsx";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";


export default function App() {
    const location = useLocation();
    const loginPaths = ['/', '/login'];
    const isLoginRoute = loginPaths.includes(location.pathname);

    return (
            <div className={ `flexbox flexbox--col flexbox--center-xy min-h-100vh
            ${ isLoginRoute ? 'bg-white' : 'bg-very-light-gray' } ` }>

                { !isLoginRoute &&
                        <header className='flexbox__item--stretch sticky sticky--top'>
                            <TransitionComponent>
                                <Header />
                            </TransitionComponent>
                        </header>
                }

                <main>
                    <Outlet/>
                </main>

                <footer className='flexbox__item--stretch flexbox__item--place-to-bottom'>
                    <TransitionComponent>
                        <Footer/>
                    </TransitionComponent>
                </footer>
            </div>
    );
}
