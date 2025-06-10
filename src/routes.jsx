import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/Mainlayout";
import Homepage from "./pages/Homepage";
import Places from "./pages/Places";
import Guides from "./pages/Guides";
import AboutNepal from "./pages/AboutNepal";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path:"/",
        element: <Homepage/>,
      },
      {
        path: "/places",
        element: <Places/>,
      },
      {
        path: "/guides",
        element: <Guides/>,
      },
      {
        path: "/aboutNepal",
        element: <AboutNepal/> ,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ]
  }
])