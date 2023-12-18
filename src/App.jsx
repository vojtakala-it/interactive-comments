import './App.less'
import TransitionComponent from "./components/utils/TransitionComponent.jsx";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";


export default function App() {
    const loginPaths = ['/', '/login'];
    const isLoginRoute = loginPaths.includes(useLocation().pathname);

    const bgColor = isLoginRoute ? 'bg-white' : 'bg-very-light-gray';
    const header = (
        <header className='flexbox__item--stretch sticky sticky--top'>
            <TransitionComponent>
                <Header/>
            </TransitionComponent>
        </header>
    );

    return (
        <div className={ `flexbox flexbox--col flexbox--center-xy min-h-100vh ${ bgColor }` }>
            { !isLoginRoute && header }

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
