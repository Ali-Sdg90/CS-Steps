import React, { useContext } from "react";
import Context2 from "./Context2";
import { ThemeContext } from "../App";

const Context1 = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <div>
            <hr />
            <div className="container-xl">
                <p className="display-6">Context1.tsx</p>
                <button
                    className="btn btn-light m-1 border border-2 border-info shadow"
                    onClick={() => setTheme("primary")}
                >
                    Primary
                </button>
                <button
                    className="btn btn-light m-1 border border-2 border-info shadow"
                    onClick={() => setTheme("secondary")}
                >
                    Secondary
                </button>
                <button
                    className="btn btn-light m-1 border border-2 border-info shadow"
                    onClick={() => setTheme("success")}
                >
                    Success
                </button>
                <button
                    className="btn btn-light m-1 border border-2 border-info shadow"
                    onClick={() => setTheme("danger")}
                >
                    Danger
                </button>
                <button
                    className="btn btn-light m-1 border border-2 border-info shadow"
                    onClick={() => setTheme("warning")}
                >
                    Warning
                </button>
                <button
                    className="btn btn-light m-1 border border-2 border-info shadow"
                    onClick={() => setTheme("info")}
                >
                    Info
                </button>
                <button
                    className="btn btn-light m-1 border border-2 border-info shadow"
                    onClick={() => setTheme("light")}
                >
                    Light
                </button>
                <button
                    className="btn btn-light m-1 border border-2 border-info shadow"
                    onClick={() => setTheme("dark")}
                >
                    Dark
                </button>
                <div className="m-5"></div>
                <Context2 value="Hello!" />
            </div>
            <hr />
        </div>
    );
};

export default Context1;
