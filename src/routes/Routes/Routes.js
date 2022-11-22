import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main/Main";
import Login from "../../login/Login/Login";
import SignUp from "../../login/SignUp/SignUp";
import ErrorPage from "../../others/ErrorPage/ErrorPage";
import Appointment from "../../pages/appointment/Appointment/Appointment";
import AddDoctor from "../../pages/dashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/dashBoard/AllUsers/AllUsers";
import DashBoard from "../../pages/dashBoard/DashBoard/DashBoard";
import ManageDoctors from "../../pages/dashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../pages/dashBoard/MyAppointment/MyAppointment";
import Payment from "../../pages/dashBoard/Payment/Payment";
import Home from "../../pages/home/Home/Home";
import AdminRoute from "../AdminRoute/AdminRoute";
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
        <DashboardLayout></DashboardLayout>{" "}
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>, //error element
    children: [
      {
        path: "/dashBoard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashBoard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashBoard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashBoard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashBoard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://accudental-2-server.vercel.app/bookings/${params.id}`),
      },
    ],
  },
]);
export default router;
