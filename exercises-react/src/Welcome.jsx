import { Age } from "./Age"

export function Welcome({ name= 'Guest', age='undefined' }) {
    return (
        <div>
                <p>Welcome, <strong>{ name }</strong>!</p>
                <Age age={ age } />
        </div>
    )
}