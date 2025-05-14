import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { ProvidersComponent } from "../providers";
import { HomeComponent } from "modules/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProvidersComponent />,
    children: [
      { path: "/", Component: HomeComponent },
      { path: "*", Component: () => <div>404</div> },
    ],
  },
]);

export const RouterComponent: React.FC<any> = ({ children }) => (
  //@ts-ignore
  <RouterProvider router={router}>${children}</RouterProvider>
);
