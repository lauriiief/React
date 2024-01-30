import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { GithubUsers } from "./GithubUser";
import classes from "./GithubUserList.module.scss"

export function GithubUserList() {
    //const { username } = useParams()
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
        <div className={classes.div_addflex}>
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
            <Link to='/users/lauriiief'>Add a user to the path and search it</Link>
        </div>
    )
}