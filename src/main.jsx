import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.less'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/utils/ErrorPage.jsx";
import CommentsSection from "./components/CommentsSection/CommentsSection.jsx";
import Login from "./components/Login/Login.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Login,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/comments",
                Component: CommentsSection,
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
