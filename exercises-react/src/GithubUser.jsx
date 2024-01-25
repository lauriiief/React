import { useState, useEffect } from "react";
import { useGithubUser } from "./useGithubUser";
import { useParams } from "react-router-dom";

export function GithubUser(){
    const { username } = useParams()
    const {data, loading, error, onFetchUser } = useGithubUser(username)
        
    return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>There has been an error</p>}
        {data && <p>name: {data.name} login: {data.login}</p>}
        {/*{data && <img src={data.avatar_url} />}*/}
    </div>)
}

export function GithubUsers() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
  
      setUsers([...users, json]);
      setUsername('');
    }
  
    function handleChange(event) {
      setUsername(event.target.value);
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleChange} />
          </label>
          <button type="submit">Search</button>
        </form>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <GithubUser username={user.login} />
            </li>
          ))}
        </ul>
      </div>
    );
  }