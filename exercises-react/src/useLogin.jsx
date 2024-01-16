import { useState } from "react"

export function useLogin(loginFunction) {
    
    const [data, setData] = useState({username: '',
                                      password: '',
                                      remember: false})

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
        setData({username: '',
                 password: '',
                 remember: false})
    }

    function handleSubmit(event){
        event.preventDefault();
        if(data.username && data.password){
            loginFunction(data);
        }
    }

    return {
        data: data,
        handleInputChange: handleInputChange,
        handleReset: handleReset,
        handleSubmit: handleSubmit
    }
}