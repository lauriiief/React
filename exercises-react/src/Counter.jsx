import { useState } from "react"

export function Counter({initialValue = 0, incrementValue = 1, decrementValue = 1}){
    const [counter, setCounter] = useState(initialValue);

    function handleCounterIncrement(){
        setCounter((c) => c + incrementValue);
    }

    function handleCounterDecrement(){
        setCounter((c) => c - decrementValue);
    }

    function handleReset(){
        setCounter(initialValue)
    }

    return(
        <div>
            <h2>I have counted to {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}