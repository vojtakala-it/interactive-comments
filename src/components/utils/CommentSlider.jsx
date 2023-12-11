import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';


const CommentSlider = ({ children, index }) => {
    const [inProp, setInProp] = useState(false);
    const delay = 600 * index;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setInProp(true);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [delay]);

    return (
            <CSSTransition
                    in={ inProp }
                    timeout={ { enter: 500, exit: 500 } }
                    classNames='comment-animation'
                    unmountOnExit
                    style={ { transitionDelay: `${ delay }ms` } }
            >
                { children }
            </CSSTransition>
    );
};

export default CommentSlider;
