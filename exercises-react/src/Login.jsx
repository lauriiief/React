import { useState } from "react"

function createData(){
    return {
        username: '',
        password: '',
        remember: false
    }
}

export function Login({loginFunction}) { // callback = una funcion que se pasa como propiedad
    const [data, setData] = useState(createData())

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData(d => {
            return {
                ...d,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleReset(){
        setData(createData())
    }

    function handleSubmit(event){
        event.preventDefault();
        if(data.username && data.password){
            loginFunction(data);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        if(data.username && data.password){
            loginFunction(data);
        }
    }

    return (
        <div>
            <form id="myForm">
                <p>Inside form element</p>
                <input name="username" type="text" value={data.username} onChange={handleInputChange}/>
                <input name='password' type='password' value={data.password} onChange={handleInputChange} />
                <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}/>remember
                <button onClick={handleReset}>Reset</button>
                <input type="submit" value="Login"/>
            </form>

            <p>Outside form element</p>
            <input name='username' value={data.username} onChange={handleInputChange} />
            <input name='password' type='password' value={data.password} onChange={handleInputChange} />
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}/>remember
            <button disabled={!data.username || !data.password} onClick={() => loginFunction(data)}>Login</button>  {/* pasamos la funcion con una arrow function porque sino se estaria ejecutando todo el rato */}      
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}