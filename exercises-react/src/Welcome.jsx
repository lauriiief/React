export function Welcome({ name= 'Guest', age='undefined' }) {
    return (
        <div>
                <p>Welcome, <strong>{ name }</strong>!</p>
                <p>Your age is { age }</p>
        </div>
    )
}