export function Button({ onClick, title}){
    return <button onClick={ onClick }>{ title }</button>
}

export function AlertClock(){
    function showDateonClick() {
        const now = new Date()
        alert(`The current time is ${now.toLocaleDateString()}`)

    }

    return (
        <div>
            <p>Click the button below to show the current time</p>
            <Button onClick={showDateonClick} title={"Click me!"} />
        </div>
    )
}