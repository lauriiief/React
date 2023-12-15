export function Age({ age }) {
    return (
        <div>
                { age >= 18 ? <p>You are {age} years old.</p> : <p>You are very young!</p> }

        </div>
    )
}