import { useMemo } from "react"

export function FilteredList({list}){

    const memoizedList = useMemo(() => {
        return list.filter((person) => person.age > 18);

    }, [list]);

    return (
        <div>
            <ul>
                {memoizedList.map((person, index) => (
                    <li key={index}>
                        Id: {person.id} Name: {person.name} Age: {person.age}
                    </li>
                ))}
            </ul>

        </div>
    )
}