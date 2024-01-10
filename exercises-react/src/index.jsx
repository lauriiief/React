import { Hello } from "./Hello";
import { createRoot } from "react-dom/client";
import { App } from "./App"

import "./index.css"

const HelloElement = <Hello />

createRoot(document.getElementById("root")).render(<App />)
