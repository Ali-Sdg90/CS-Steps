import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

// import { BrowserRouter } from "react-router-dom";

axios.interceptors.request.use(
    (request) => {
        console.log(`A "${request.method}" request sent to ${request.url}`);
        return request;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log(`A response has been received from ${response.config.url}`);
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    // <BrowserRouter>
        <App />
    // </BrowserRouter>
);
