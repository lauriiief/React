import { useEffect, useState } from "react"
import classes from "./Clock.module.scss"

export function Clock() {

    const [date, setDate] = useState(new Date)

    

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

    }, [])

    return (
    <div className={classes.container}>
        <h2>Current time: {date.toLocaleTimeString()}</h2>
    </div>)
}
