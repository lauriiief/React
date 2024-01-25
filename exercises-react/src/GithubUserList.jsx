import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {

    async function gettingList() {
        const response = await fetch(`https://api.github.com/users`);
        const json = await response.json();

        return json
    }
    
    const UsersList = gettingList()

    return (
        <div>
            <ul>
                {UsersList.map((user, index) => (
                <li key={index}>
                    {<Link to={`/users/${user.login}`}>{user.login}</Link>}
                </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}