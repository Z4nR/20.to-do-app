import React from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./component/TodoApp";

import "./style/main.css";
import "./style/responsive.css";

const root = createRoot(document.getElementById("root"));
root.render(<TodoApp />);
