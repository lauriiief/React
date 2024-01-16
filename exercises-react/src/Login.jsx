import { useState } from "react"
import { useLogin } from "./useLogin"

function createData(){
    return {
        username: '',
        password: '',
        remember: false
    }
}

export function Login({loginFunction}) { // callback = una funcion que se pasa como propiedad
    const {data, handleInputChange, handleReset, handleSubmit} = useLogin(loginFunction)

    return (
        <div>
            <form id="myForm" onSubmit={handleSubmit}>
                <p>Inside form element</p>
                <input name="username" type="text" value={data.username} onChange={handleInputChange}/>
                <input name='password' type='password' value={data.password} onChange={handleInputChange} />
                <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}/>remember
                <button onClick={handleReset}>Reset</button>
                <input type="submit" value="Login"/>
            </form>

            {/*
            <input name='username' value={data.username} onChange={handleInputChange} />
            <input name='password' type='password' value={data.password} onChange={handleInputChange} />
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}/>remember
            <button disabled={!data.username || !data.password} onClick={() => loginFunction(data)}>Login</button>   pasamos la funcion con una arrow function porque sino se estaria ejecutando todo el rato       
            <button onClick={handleReset}>Reset</button>
            */}
            
        </div>
    )
}