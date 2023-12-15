import { Age } from "./Age"

export function Welcome({ name, age}) {
    return (
        <div>
                <p>Welcome, <strong>{ name }</strong>!</p>
                {/*<p>You are { age } years old</p>*/}
                { age >= 18 && <Age age={age}/>}
                { age && <Age age={age}/>}
                { age >= 18 && age <= 65 ? <Age age={age}/> : null}
                { age >= 18 && age <= 65 && name === "John" ? <Age age={age}/> : null}
        </div>
    )
}