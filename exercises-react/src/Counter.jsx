import { useState } from "react"
import { CounterDisplay } from "./DisplayCounter";

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
            <CounterDisplay count={counter}/>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}