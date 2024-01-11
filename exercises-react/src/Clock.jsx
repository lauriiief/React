import { useContext, useEffect, useState } from "react"
import classes from "./Clock.module.scss"
import { LanguageContext } from "./LanguageContext"

export function Clock() {

    const language = useContext(LanguageContext)

    const [date, setDate] = useState(new Date)

    

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

    }, [])

    return (
    <div className={classes.container}>
        <h2>{language === 'en' ? 'Current time:' : 'Hora actual:'} {date.toLocaleTimeString()}</h2>
    </div>)
}
