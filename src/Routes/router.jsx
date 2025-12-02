import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import AllGames from '../pages/AllGames';
import Contact from '../pages/Contact';
import GameDetails from '../pages/GameDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Error404 from '../pages/Error404';
import UpdateProfile from '../pages/UpdateProfile';
import Profile from '../pages/Profile';
import NewsletterPage from '../pages/NewsletterPage';
import Popular from '../pages/Popular';
import AboutPage from '../pages/About';
import Support from '../pages/Support';

const Router = createBrowserRouter([
    {
        path: "*",
        element: <Error404 />
    },
    {
        element: <Layout />,
        children: [
            {
                path:"/",
                element:<Home />
            },
            {
                path: "/all-games",
                element: <AllGames />
            },
            {
                path: "/game/:id",
                element: (
                    <ProtectedRoute>
                        <GameDetails />
                    </ProtectedRoute>
                )
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            },
            {
                path: "profile/update",
                element: (
                    <ProtectedRoute>
                        <UpdateProfile />
                    </ProtectedRoute>
                )
            },
            {
                path: "/newsletter",
                element: <NewsletterPage />
            },
            {
                path: "/popular",
                element: <Popular />
            },
            {
                path: "/about",
                element:<AboutPage />
            },
            {
                path: "/support",
                element:<Support/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element:<Register />
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />
    }
])

export default Router;
