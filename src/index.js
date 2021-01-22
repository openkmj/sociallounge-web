import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./modules/ScrollToTop";
import { UserProvider } from "./modules/Context";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <UserProvider>
                <App />
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
