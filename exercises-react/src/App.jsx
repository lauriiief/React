import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

{/*export function App() {
    return (
        <div>
            <Hello />
            <Hello />  it renders anyway but two hello worlds 
            <Message />
        </div>
    )
} */}

export function App(){
    return (
    <div>
        <Welcome name="Laura" age={16} /> 
    </div>
    )
}{/* When I pass my name, it renders as Welcome, Laura! */}
{/* When I doesn't pass any name, it renders as Welcome, Guest! (default) */}