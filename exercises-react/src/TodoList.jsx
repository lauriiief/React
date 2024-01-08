import { useState } from "react"

export function ToDoList(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        setTodos([...todos, input]);
        setInput('');
    }

    return(
        <div>
            <ul>
                {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
                ))}
            </ul>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}
