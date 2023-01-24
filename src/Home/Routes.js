import Home from "./Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScrollModule from "../Examples/ModuleWithScroll";
import UseContextApi from "../Examples/Context API";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 page doesn't exists</div>,
  },
  {
    path: '/moduleWithScroll',
    element: <ScrollModule />,
  },
  {
    path: '/useContextApi',
    element: <UseContextApi />,
  }
])

const Routes = () => <RouterProvider router={router} />;

export default Routes;