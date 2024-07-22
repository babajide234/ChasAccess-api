import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Bills from "./pages/Bills";
import Checkout from "./pages/Checkout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:"/",
            element:<Bills/>
        },
        {
            path:"/checkout",
            element:<Checkout/>
        }
      ]
    },
  ]);


  export default router;