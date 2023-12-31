import { StrictMode } from "react";
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import FocusableInput from "./FocusableInput";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import ComponentMouted from "./ComponentMouted";
import { Colors } from "./Colors";
import { ToDoList } from "./TodoList";

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

    function onLogin(data){
        console.log(data);
    }

    return (
    <div>
        <StrictMode>
            <Welcome name="Laura" age={40} /> 
            <AlertClock/>
            <Counter/>
            <MouseClicker/>
            <Clock/>
            <Login loginFunction={onLogin}/>
            <InteractiveWelcome/>
            <UncontrolledLogin/>
            <Colors colors={[
                {id: 1, name: 'red'},
                {id: 2, name: 'yellow'},
                {id: 3, name: 'blue'},
                {id: 4, name: 'green'},
                {id: 5, name: 'purple'},
            ]} />
            <FocusableInput/>
            <ComponentMouted/>
            <ToDoList />
        </StrictMode>
    </div>
    )
}{/* When I pass my name, it renders as Welcome, Laura! */}
{/* When I doesn't pass any name, it renders as Welcome, Guest! (default) */}