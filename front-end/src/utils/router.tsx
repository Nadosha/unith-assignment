import React from "react";
import {createBrowserRouter} from "react-router-dom";
import BasicLayout from "@Components/Layouts/BasicLayout";
import {ItemsDetails, ItemsList} from "@Features/index";
import ErrorBoundary from "@Components/ErrorBoundary";
import {NotFound} from "@Components/UI/404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout/>,
        children: [
            {
                id: "home",
                path: "/",
                element: <ItemsList/>,
            },
            {
                id: "details",
                path: "/:id/:name",
                element: <ItemsDetails/>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorBoundary children={<NotFound/>}/>,
    }
]);

export default router;