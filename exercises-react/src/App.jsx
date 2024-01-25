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
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { GithubUser, GithubUsers } from "./GithubUser";
import { FilteredList } from "./FilteredList";
import { List, FormComponent, NavigationComponent, ToggleCheckpoint} from './PracticeCheckpoint'
import { Link, Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";


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

    const [language, setlanguage] = useState("en")

    function handleSetLanguage(event){
        setlanguage(event.target.value)
    }

    return (
    <StrictMode>    
    <Container title={
        <div>
            <h1>My Awesome App</h1>
            <div>
                <Link to='/'>Home</Link> | <Link to='/:name'>Welcome</Link> | <Link to='/counter'>Counter</Link> | <Link to='/users'>Github Users</Link>
            </div>
            
        </div>}>
        <Routes>
            <Route path="/" />
            <Route path="/:name" element={<Welcome />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/users" element={<GithubUserList />} >
                <Route path=":username" element={<GithubUser />} />
            </Route>
            <Route path="*" element={<div>
                    <p>Not Found</p>
                    <Link to='/'>Go Home</Link>
                    </div>} />
        </Routes>
        
    </Container>
    </StrictMode>
    )
}{/* When I pass my name, it renders as Welcome, Laura! */}
{/* When I doesn't pass any name, it renders as Welcome, Guest! (default) */}