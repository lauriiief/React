import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {

    const [counter, setCounter] = useState(initialValue);

    const handleCounterIncrement = useCallback(() => {
        setCounter((c) => c + 1);
        refValue.current = "up";
        console.log(refValue);
    }, []);

    const handleCounterDecrement = useCallback(() => {
        setCounter((c) => c - 1);
        refValue.current = "down";
        console.log(refValue);
    }, []);

    const handleReset = useCallback(() => {
        setCounter(initialValue)
    }, []);

    return { 
        counter: counter, 
        onIncrement: handleCounterIncrement, 
        onDecrement: handleCounterDecrement, 
        onReset: handleReset }
}