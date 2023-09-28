import React from "react";
import ReactDOMClient from "react-dom/client";
import { Products } from "./screens/Products";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Products />);
