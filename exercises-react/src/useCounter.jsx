import { useState } from "react";

export function useCounter(initialValue = 0) {

    const [counter, setCounter] = useState(initialValue);

    function handleCounterIncrement(){
        setCounter((c) => c + 1);
        refValue.current = "up";
        console.log(refValue);
    }

    function handleCounterDecrement(){
        setCounter((c) => c - 1);
        refValue.current = "down";
        console.log(refValue);
    }

    function handleReset(){
        setCounter(initialValue)
    }

    return { 
        counter: counter, 
        onIncrement: handleCounterIncrement, 
        onDecrement: handleCounterDecrement, 
        onReset: handleReset }
}