import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './About.css'
import App from './RegisterPage';
import Home from './App';
import Login from './LoginPage';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

Amplify.configure(awsConfig);

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
