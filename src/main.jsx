import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.less'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/utils/ErrorPage.jsx";
import Login from "./components/Login/Login.jsx";
import CommentsSection from "./components/CommentsSection/CommentsSection.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./components/Auth/AuthContext.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                Component: () => <Navigate to='/login'/>,
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
    <AuthProvider>
        <RouterProvider router={ router }/>
    </AuthProvider>
)
