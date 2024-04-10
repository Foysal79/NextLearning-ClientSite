import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Components/Error/Error";
import Home from "../Home/Home/Home";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children : [
        {
          path : "/",
          element : <Home></Home>
        },
        {
          
        }
      ]

    },
  ]);

export default Router;