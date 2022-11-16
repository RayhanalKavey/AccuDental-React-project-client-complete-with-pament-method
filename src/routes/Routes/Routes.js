import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Login from "../../login/Login/Login";
import SignUp from "../../login/SignUp/SignUp";
import ErrorPage from "../../others/ErrorPage/ErrorPage";
import Appointment from "../../pages/appointment/Appointment/Appointment";
import DashBoard from "../../pages/dashBoard/DashBoard/DashBoard";
import Home from "../../pages/home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
  {
    path: "/dashBoard",
    element: (
      <PrivateRoute>
        {" "}
        <DashBoard></DashBoard>{" "}
      </PrivateRoute>
    ),
  },
]);
export default router;
