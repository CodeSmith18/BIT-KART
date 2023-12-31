import * as React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import Login from "./components/Login";
import SingUp from "./components/Singup";
import Addproduct from "./components/Addproduct/Addproduct";
import Ourteam from "./components/Our Team/Ourteam";



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>) ,
  },
  {
    path: "/Login",
    element: (<Login/>) ,
  },
  {
    path: "/Singup",
    element: (<SingUp/>) ,
  },
  {
    path: "/Addproduct",
    element: (<Addproduct></Addproduct>) ,
  },
  {
    path: "/Ourteam",
    element: (<Ourteam></Ourteam>) ,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();
