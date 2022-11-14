import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Login from "../../login/Login/Login";
import SignUp from "../../login/SignUp/SignUp";
import ErrorPage from "../../others/ErrorPage/ErrorPage";
import Appointment from "../../pages/appointment/Appointment/Appointment";
import Home from "../../pages/home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
]);
export default router;
