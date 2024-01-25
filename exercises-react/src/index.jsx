import { Hello } from "./Hello";
import { createRoot } from "react-dom/client";
import { App } from "./App"

import "./index.css"
import { AppCheckpoint } from "./AppCheckpoint";
import { Root } from "./Root";

const HelloElement = <Hello />

createRoot(document.getElementById("root")).render(<Root />)
