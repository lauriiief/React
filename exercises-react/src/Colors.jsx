
export function Color({ color }){
    return(
        <li>
            <h4>{color}</h4>
        </li>
    )
}

export function Colors({ colors }){
    return(
        <ul>
            {colors.map((color) =>
            <Color key={color.id} color={color.name} />
            )}
        </ul>
    )
}