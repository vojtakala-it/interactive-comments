import { SunspotLoader } from "react-awesome-loaders";
import TransitionComponent from "../utils/TransitionComponent.jsx";


export default function LoadingComponent({ loadingText }) {

    return (
        <div className='flexbox flexbox--col flexbox--center-xy h-100vh'>
            <TransitionComponent>
                <h1 className='f-medium f-xxl mb-m'>{ loadingText }</h1>
            </TransitionComponent>
            <SunspotLoader
                gradientColors={ ["hsl(250, 44%, 36%)", "hsl(238, 40%, 70%)"] }
                shadowColor={ "#3730A3" }
                desktopSize={ "128px" }
                mobileSize={ "50px" }
            />
        </div>
    )
};
