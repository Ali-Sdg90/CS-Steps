import React, { useState, createContext } from "react";
import NumberCounter from "./NumberCounter";
import Context1 from "./Context-Folder/Context1";
import ReactRouterDom from "./ReactRouterDom";

export const ThemeContext = createContext({
    theme: "info",
    setTheme: (theme: string) => {},
});

const App = () => {
    const [theme, setTheme] = useState("info");

    return (
        <div>
            <NumberCounter />
            <NumberCounter />

            <ThemeContext.Provider value={{ theme, setTheme }}>
                <Context1 />
            </ThemeContext.Provider>

            <ReactRouterDom></ReactRouterDom>
        </div>
    );
};

export default App;
