import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import {Login} from './pages/login.jsx';
import {PrivRoutes} from './pages/privRoutes.jsx';
import { Home } from './pages/home.jsx';
import { Chat } from './pages/chat.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace={true} />,
  },

  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/home",
    element: <PrivRoutes targetComponent = {<Home/>}/>,
  },

  {
    path: "/chat",
    element: <PrivRoutes targetComponent = {<Chat/>}/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);