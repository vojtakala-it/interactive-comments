export default function LoadingComponent({ loadingText }) {

    return (
        <div className='flexbox flexbox--col flexbox--center-xy h-100vh'>
            <h1 className='f-medium f-xxl mb-m'>{ loadingText }</h1>
            <div className='loader'></div>
        </div>
    )
};
