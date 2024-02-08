import React from "react";
import { ThemeContext } from "../App";
import { useContext } from "react";

const Context2 = ({ value }: { value: string }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <p className="display-6">Context2.tsx</p>
            <div className={`bg-${theme} p-3 fw-bold lead rounded`}>
                {value}
            </div>
        </div>
    );
};

export default Context2;
