import React from "react";
import { useState, useEffect } from "react";

const NumberCounter = () => {
    const [name, setName] = useState<string | number>("Ali");
    const [outputType, setOutputType] = useState<boolean>(true);
    const [clickCounter, setClickCounter] = useState<number>(-1);

    const clickHandler = () => {
        if (outputType) {
            setName(Math.trunc(Math.random() * 90) + 10);
        } else {
            setName("Ali");
        }

        setOutputType((outputType) => !outputType);
    };

    useEffect(() => {
        setClickCounter(clickCounter + 1);
    }, [name]);

    return (
        <div className="container-xl">
            <h1>Hi</h1>
            <h1>{name}</h1>
            <button onClick={clickHandler}>
                change to
                <span style={{ width: "80px", display: "inline-block" }}>
                    {outputType ? " number" : " boolean"}
                </span>
                ({clickCounter})
            </button>
        </div>
    );
};

export default NumberCounter;
