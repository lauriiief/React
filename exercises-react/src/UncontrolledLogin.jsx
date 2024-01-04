
export function UncontrolledLogin() {
    function handleFormSubmit(event){
        event.preventDefault()
        const dataForm = new FormData(event.target)

        if (dataForm.get('username') && dataForm.get('password')){
            const dataObj = {
                username: dataForm.get('username'),
                password: dataForm.get('password'),
                session: dataForm.get('remember'),
            }
            console.log(dataObj)
        }

    }

    return (
        <form onSubmit={handleFormSubmit}>
            <p>Uncontrolled form</p>
            <input name="username"/>
            <input name='password' type='password'/>
            <input name="remember" type="checkbox"/>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}