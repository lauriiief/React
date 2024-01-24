import { Hello } from "./Hello";
import { createRoot } from "react-dom/client";
import { App } from "./App"

import "./index.css"
import { AppCheckpoint } from "./AppCheckpoint";

const HelloElement = <Hello />

createRoot(document.getElementById("root")).render(<AppCheckpoint />)
