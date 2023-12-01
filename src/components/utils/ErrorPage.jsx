import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const err = useRouteError();

    return (
        <div id="error-page" className='flexbox flexbox--col gap-xs flexbox--center-xy'>
            <h1 className='f-xxl mb-m'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <hr/>
            <p className='f-grayish-blue f-bold'>
                <i>{err.code || err.statusText || err.message}</i>
            </p>
        </div>
    );
}
