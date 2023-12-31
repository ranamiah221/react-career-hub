import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots';
import Home from './components/Home/Home';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
        children:[
         {
          path:'/',
          element:<Home></Home>
         },
         {
          path:'/applied',
          element:<Appliedjobs></Appliedjobs>
         },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
