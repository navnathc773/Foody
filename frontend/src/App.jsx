import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./Home.jsx";
import { About } from "./About.jsx";
import { Contact } from "./Contact.jsx";
import { Cart } from "./Cart.jsx";

export const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home />,

      children:[
        {
          path:"/About",
          element:<About />
        },
        {
          path:"/Contact",
          element:<Contact />
        },
        {
          path:"/Cart",
          element:<Cart />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}