import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export function GithubUserList() {
    const navigate = useNavigate()

    async function gettingList() {
        const response = await fetch(`https://api.github.com/users`);
        const json = await response.json();

        return json
    }
    
    const [UsersList, setUsersList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const users = await gettingList();
            setUsersList(users);
        }

        fetchData();
    }, []);

    function handleClick(user) {
        navigate(`/users/${user.login}`);
    }

    return (
        <div>
            <ul>
                {UsersList.map((user, index) => (
                <li key={index}>
                    <button onClick={() => handleClick(user)}>
                        {user.login}
                    </button>
                </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}