import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RRDRoot = () => {
    return (
        <div className="mx-4">
            <h3 className="display-3 text-info">NavLink:</h3>
            <ol>
                <li>
                    <NavLink to="Route1">Route1</NavLink>
                </li>
                <li>
                    <NavLink to="Route2">Route2</NavLink>
                </li>
            </ol>

            <Outlet></Outlet>
        </div>
    );
};

export default RRDRoot;
