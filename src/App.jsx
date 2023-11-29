import './App.less'
import CommentsSection from "./components/comments/CommentsSection.jsx";
import Login from "./components/login/Login.jsx";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/footer/Footer.jsx";
import TransitionComponent from "./components/utils/TransitionComponent.jsx";


function App() {

    return (
            <>
                <main className='flexbox flexbox--center-xy h-100'>
                    <TransitionComponent>
                        <Login />
                    </TransitionComponent>
                </main>
                <footer className='flexbox__item--stretch flexbox__item--place-to-bottom'>
                    <TransitionComponent>
                        <Footer />
                    </TransitionComponent>
                </footer>
            </>
    );
}

export default App;
