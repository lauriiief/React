//1. Cree un nuevo archivo llamado `Toggling.jsx`
//2. Dentro de `Toggling.jsx`, defina un nuevo componente de clase llamado `Toggling`
//3. Utilice el estado del componente para realizar un seguimiento de su estado de activación (verdadero/falso)
//4. Agregue un botón para activar/desactivar el componente.
//5. Muestra texto diferente dependiendo del estado de activación (por ejemplo, "Activado" o "Desactivado")

import { useState } from "react"

export function Toggling() {

    const [activado, setActivado] = useState(true)

    function handleToggle() {
        setActivado(!activado)
    }

    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            {activado && <h1>Activado</h1>}
            {!activado && <h1>Desactivado</h1>}

        </div>
    )
}

// 1. Cree un nuevo archivo llamado `List.jsx`
// 2. Dentro de `List.jsx`, defina un nuevo componente de clase llamado `List`
// 3. Utilice el estado del componente para realizar un seguimiento de los elementos de la lista.
// 4. Agregue una entrada y un botón para agregar elementos a la lista.
// 5. Mostrar los elementos de la lista en el componente.

export function List() {

    const [lista, setLista] = useState([])
    const [input, setInput] = useState('')

    function handleAdd() {
        setLista([...lista, input])
    }

    return (
        <div>
            <ul>
                {lista.map((element) =>
                <li>{element}</li>
                )}
            </ul>
            <input type="texto" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}