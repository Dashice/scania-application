import React from "react";
import ReactDOM from "react-dom/client";

import { Application } from "@components";

import {
  applyPolyfills,
  defineCustomElements,
} from "scandash-component-library/loader";

import "scandash-component-library";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

applyPolyfills().then(() => {
  defineCustomElements(window);
});
