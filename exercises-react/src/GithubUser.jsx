import { useState, useEffect } from "react";

export function GithubUser({ username }){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username) {
        setLoading(true)
        setError(null)

        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()

            setData(json)
            console.log(json)
        } catch(error) {
            setError(error)
            setData(null)
        } finally{
            setLoading(false)
        }
        
    }

    useEffect(() => {
        fetchGithubUser(username)
    }, [username])
    
    return <div>
        {loading && <p>Loading...</p>}
        {error && <p>There has been an error</p>}
        {data && <p>name: {data.name} login: {data.login}</p>}
        {data && <img src={data.avatar_url} />}
    </div>
}