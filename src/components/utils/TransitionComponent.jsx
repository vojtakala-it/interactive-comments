import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';


const TransitionComponent = ({ children }) => {
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <CSSTransition in={ inProp } timeout={ 1100 } classNames='appear'>
            { children }
        </CSSTransition>
    );
};

export default TransitionComponent;
