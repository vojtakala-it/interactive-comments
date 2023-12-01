import './App.less'
import Footer from "./components/footer/Footer.jsx";
import TransitionComponent from "./components/utils/TransitionComponent.jsx";
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";


export default function App() {
    const location = useLocation();
    const loginPaths = ['/', '/login'];
    const isCommentsRoute = loginPaths.includes(location.pathname);

    return (
            <div className={`
            flexbox 
            flexbox--col 
            flexbox--center-xy 
            min-h-100vh
            ${isCommentsRoute ? 'bg-white' : 'bg-very-light-gray'}
            `}>
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
