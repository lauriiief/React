import { useState } from "react"

export function Container({ title, children }){

    const [collapse, setCollapse] = useState(false)

    function handleToggle(){
        setCollapse(t => !t)
    }

    return(
        <div>
            <div className="container">{ title } <button onClick={handleToggle} className="button">Toggle</button></div>
            <div className={!collapse ? 'app-content' : 'app-content-hidden'}>{ children }</div>
        </div>)
}