import { useState } from "react"

export function Toggle() {
    const [toggle, setToggle] = useState(false)

    function handleToggle(){
        setToggle(!toggle)
    }

    return (
        <div>
            <button onClick={handleToggle}> Toggle </button>
            {toggle && <h1> Hola </h1>}
            {!toggle && <h1> Adios </h1>}
        </div>
    )
}