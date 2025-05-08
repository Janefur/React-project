// import { useState } from 'react'
// import './App.css'
import Contact from "../components/Contact";
import Home from "../components/Home";
import Recipe from "../components/Recipe";
import Foodielogo from "./assets/Foodielogo.png";
import Footer from "../components/Footer";

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Contact />, path: "/contact" },
        { element: <Recipe />, path: "/recipe/:id" },
      ],
      element: (
        <>
          <nav>
            <ul>
              <img src={Foodielogo} alt="" />
              <li>
                <Link to="/">Hem</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Outlet />
          </main>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
