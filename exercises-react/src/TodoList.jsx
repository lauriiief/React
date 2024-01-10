import { useState } from "react";
import classes from "./TodoList.module.scss"

export function ToDoList(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        setTodos([...todos, input]);
    }

    const handleResetTodo = () => {
        setInput('');
    }

    const handleRemoveTodo = (index) => {
        setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
    }

    return(
        <div>
            <ul>
                {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                </li>
                ))}
            </ul>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button className={classes.button} onClick={handleAddTodo}>Add</button>
            <button className={classes.button} onClick={handleResetTodo}>Reset</button>
        </div>
    )
}
