import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import { injectGlobal } from "styled-components";

injectGlobal`
/* Make the MainNavigation responsive */
.p-navigation__banner {
  overflow-x: auto;
}
`;

ReactDOM.render(
  <Routes />,
  document.getElementById("ubuntu-free-culture-showcase")
);
