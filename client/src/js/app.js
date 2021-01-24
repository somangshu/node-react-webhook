/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers.
 */
require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page.
 */
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import Template from "./template";
import theme from "./theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Template />
    </ThemeProvider>,
    document.getElementById("root")
);
