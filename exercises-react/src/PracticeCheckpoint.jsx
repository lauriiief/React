

// 1 Crear un componente lista: archivo que se llame List.jsx, dentro ponemos función List y usar useState para 
// keep track del contenido de los ítems de esa lista, agregar input, con botón para agregar ítems a la lista.

import { useState, useEffect } from "react"

export function List() {

    const [lista, setList] = useState([])
    const [input, setInput] = useState('')

    const handleAdd = () => {
        setList([...lista, input]);
    }

    const handleReset = () => {
        setInput('');
    }


    return (
        <div>
            <ul>
                {lista.map((element, index) => (
                <li key={index}>
                    {element}
                </li>
                ))}
            </ul>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

// Crear una form component, name, username, email, button submit… cuando se de clic mostrar elementos <h3> 
// donde salgan el name, surname y email.

export function FormComponent() {

    const [data, setData] = useState({
        name: '',
        username: '',
        email: ''
    })

    function handleInputChange(event) {
        const { name, value } = event.target;

        setData({
          ...data,
          [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(data.username && data.name && data.email){
            setData(data);
        }
    }

    function handleReset() {
        setData({
            name: '',
            username: '',
            email: ''
        })
    }

    return (
        <div>
            <form id="my form" onSubmit={handleSubmit}>
                <input name="name" type="text" value={data.name} onChange={handleInputChange}/>
                <input name="username" type="text" value={data.username} onChange={handleInputChange}/>
                <input name="email" type="text" value={data.email} onChange={handleInputChange}/>
                <button type="submit">Submit</button>
                <button onClick={handleReset}>Reset</button>
            </form>
            {data && <h3>{`Name: ${data.name}, Username: ${data.username}, Email: ${data.email}`}</h3>}
        </div>
    )
}

// Crear un toggle component, es true o false (usestate) que funcione el botón que active o desactive el componente 
// (como el de aparece o desaparece) o muestre activo o inactivo en un texto. 
// a. Utilice el estado del componente para realizar un seguimiento de su estado de activación (verdadero/falso)
// b. Agregue un botón para activar/desactivar el componente.
// c. Muestra texto diferente dependiendo del estado de activación (por ejemplo, "Activado" o "Desactivado")

export function ToggleCheckpoint() {
    const [pressed, setPressed] = useState(false)

    function handleClick() {
        setPressed(!pressed)
    }

    return (
        <div>
            <button onClick={handleClick}>Toggle</button>
            {pressed ? <h1>Activado</h1> : <h1>Desactivado</h1>}
        </div>
    )
}


// Componente Navegación, usar un switch o links o cada botón un onclick con un id diferente 
// (mejor switch para todo en una misma función) el componente seguirá el estado de la pagina que se quiere mostrar, 
// saldrá un elemento que diga, estas en la pagina Home, About us, Contact Us.

// 4b. Continuación navegación, agregar un item login component, cuando hagas clic aparece un form donde habra inputs con username 
// (admin) y password (admin), con un botón submit del form, mostrando un error de mensaje cuando las credenciales son incorrectas.

// 4c. Nuevo archivo About us, en el componente navegación, cuando se haga click en about us, nos muestre esa pagina (router) 
// y luego se haga el fetch de una pagina donde se traigan 4 usuarios random y los muestre en una card donde muestre el nombre, 
// apellido, ciudad, avatar.

export function CardsUsuarios(num) {

    const [users, setUsers] = useState([])

    async function getUsers() {
        const response = await fetch(`https://randomuser.me/api/?results=${num}`);
        const json = await response.json();
  
        setUsers([...users, json]);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
    <div>
          {users.map((user) => (
            console.log(user)
          ))}
    </div>
    )
}

export function NavigationComponent() {

    const [page, setPage] = useState('')

    function handleNavigation(event) {

        setPage(event.target.name)

    }

    return(
        <div>
            <button onClick={handleNavigation} name='home' >Home</button>
            <button onClick={handleNavigation} name='about us' >About us</button>
            <button onClick={handleNavigation} name='contact us' >Contact us</button>
            {page === 'home' && (
            <div>
                <h3>Home</h3>
                <Login />
            </div>
            )}
            {page === 'about us' && (
            <div>
                <h3>About us</h3>
                <CardsUsuarios num={4} />
            </div>
            )}
            {page === 'contact us' && <h3>Contact us</h3>}
        </div>
    )
}