import './App.less'
import CommentsSection from "./components/comments/CommentsSection.jsx";
import Login from "./components/login/Login.jsx";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Footer from "./components/Footer.jsx";


function App() {
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
            <>
                <main className='flexbox flexbox--center-xy h-100'>
                    <CSSTransition in={ inProp } timeout={ 1100 } classNames='a-appear'>
                        <Login />
                    </CSSTransition>
                </main>
                <footer className='flexbox__item--stretch flexbox__item--place-to-bottom'>
                    <Footer />
                </footer>
            </>
    );
}

export default App;
