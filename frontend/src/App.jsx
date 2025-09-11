import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout.jsx";   // new layout
import { Home } from "./Home.jsx";
import { About } from "./About.jsx";
import { Contact } from "./Contact.jsx";
import { Cart } from "./Cart.jsx";
import { ProductDetails } from "./ProductDetails.jsx";
import { ProductLoader } from "./ProductLoader.jsx";
import { Classify } from "./Classify.jsx";
import { ClassLoader } from "./ClassLoader.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", 
          element: <Home />,
        },
        {
          path:"/product/:id",
          element:<ProductDetails />,
          loader:ProductLoader,
        },
        {
          path:"/category/:product",
          element:<Classify />,
          loader:ClassLoader,
        },
        {
          path: "/About",
          element: <About />
        },
        {
          path: "/Contact",
          element: <Contact />
        },
        {
          path: "/Cart",
          element: <Cart />
        },
      ]
    }
  ]);

  return(
  <> 
    <RouterProvider router={router} />;

          <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

  </>
  )
};
