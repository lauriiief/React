import { useParams } from "react-router-dom"
import { Age } from "./Age"
import "./index.css"

export function Welcome({ age }) {
    const { name = 'Laura'} = useParams()
    return (
        <div className="welcome">
                <p>Welcome, <strong>{ name }</strong>!</p>
                {/*<p>You are { age } years old</p>*/}
                { age >= 18 && <Age age={age}/>}
                { age && <Age age={age}/>}
                { age >= 18 && age <= 65 ? <Age age={age}/> : null}
                { age >= 18 && age <= 65 && name === "John" ? <Age age={age}/> : null}
        </div>
    )
}