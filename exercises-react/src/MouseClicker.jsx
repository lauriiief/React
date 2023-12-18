export function MouseClicker() {
    function handleButtonClick(event){
        let button = event.currentTarget;
        let image = button.firstChild;
        let src = image.getAttribute("src");
        console.log(src);
    }

    return (
        <div>
            <button name="one" onClick={handleButtonClick}> 
            <img src="#"/>
            Click me 
            </button>
        </div>
    )
}