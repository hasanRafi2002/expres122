import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main1 from "./Main1";
import AuthProvider from "./firebase/AuthProviderr";
import Login from "./profile/Login";
import Register from "./profile/Register";
import PrivateRoute from "./profile/PrivateRoute";
import Profile from "./profile/Profile";
import Home from "./Home/Home";

import ContactUs from "./contact/ContactUs";
import NotFoundPage from "./others/NotFound";



import AddEquipment from "./equipment/AddEquipment";
import MyEquipment from "./equipment/MyEquipment";
import UpdateEquipmentPage from "./equipment/UpdateEquipmentPage";
import AllEquipment from "./equipment/AllEquipment";
import EquipmentDetails from "./equipment/EquipmentDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main1></Main1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },

      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "all",
        element: <AllEquipment></AllEquipment>
      },
      {
        path: "equipment/:id",
        element: <EquipmentDetails></EquipmentDetails>
      },
      {
        path: "add",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "mylist",
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: 'mylist/update-equipment/:id',
        element: (
          <PrivateRoute>
            <UpdateEquipmentPage></UpdateEquipmentPage>
          </PrivateRoute>
        ),
      },


      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

    ],
  },

  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
