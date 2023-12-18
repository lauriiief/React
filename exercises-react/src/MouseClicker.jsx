export function MouseClicker() {
    function handleButtonClick(event){
        console.log(event.currentTarget.name)
    }

    return (
        <div>
            <button name="one" onClick={handleButtonClick}> Click me </button>
        </div>
    )
}