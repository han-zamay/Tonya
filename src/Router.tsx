import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import { Tonya } from "./Tonya";

export function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Tonya/>,
        },
        {
          path: "*",
          element: <Navigate  to="/" />,
        },
    ]);
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
