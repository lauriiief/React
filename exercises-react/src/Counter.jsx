import { useEffect, useRef, useState } from "react"
import { CounterDisplay } from "./DisplayCounter";
import { useCounter } from "./useCounter";

export function Counter({initialValue = 0}){
    
    const {counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    return(
        <div>
            <CounterDisplay count={counter}/>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}