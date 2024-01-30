import { useState, useEffect } from "react";
import { useGithubUser } from "./useGithubUser";
import { useNavigate, useParams } from "react-router-dom";
import classes from './GithubUserList.module.scss'

export function GithubUser(){
    const { username } = useParams()
    const {users, loading, error, onFetchUser } = useGithubUser(username)
        
    return (
    <div className={classes.card}>
        {loading && <p>Loading...</p>}
        {error && <p>There has been an error</p>}
        {users && <img className={classes.card_image} src={users.avatar_url} />}
        {users && <p>id: {users.id}</p>}
        {users && <p>name: {users.name} </p>}
        {users && <p>login: {users.login}</p>} 
        {users && <p>url: {users.html_url}</p>}
        {users && <p>followers: {users.followers}</p>} 
        {users && <p>public repos: {users.public_repos}</p>}
        <button onClick={onFetchUser}>Refresh</button>
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