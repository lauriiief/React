import { useEffect, useRef } from "react";

const ComponentMouted = () => {
    const mountedRef = useRef(false)
    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true
            console.log('Mounting for the first time')
        }
    }, [])
}

export default ComponentMouted;