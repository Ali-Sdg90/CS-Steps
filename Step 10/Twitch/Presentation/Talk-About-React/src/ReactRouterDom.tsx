import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Route1 from "./Routes/Route1";
import Route2 from "./Routes/Route2";
import RRDRoot from "./RRDRoot";

const router1 = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RRDRoot />}>
            <Route path="Route1" element={<Route1 />} />
            <Route path="Route2" element={<Route2 />} />
        </Route>
    )
);

const router2 = createBrowserRouter([
    {
        path: "/",
        element: <RRDRoot />,
        children: [
            {
                path: "Route1",
                element: <Route1 />,
            },
            {
                path: "Route2",
                element: <Route2 />,
            },
        ],
    },
]);

const ReactRouterDom = () => {
    return <RouterProvider router={router2} />;
};

export default ReactRouterDom;
