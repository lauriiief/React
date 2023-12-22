import { useState } from "react";
import { Welcome } from "./Welcome";

function createData(){
    return {
        username: '',
        age: ''
    }
}

export function InteractiveWelcome() {

    const [data, setData] = useState(createData())

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        setData(d => {
            return {
                ...d,
                [name]: value,
                [value]: value
            }
        })
    }

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="age" value={data.age} onChange={handleInputChange} />
            <Welcome name={data.username} age={data.age}/>
        </div>
    )
}