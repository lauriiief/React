import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

export function useGithubUser(username) {
    if(!username){
        return{
            users: null,
            error: null,
            isLoading: false,
            onfetchUser: () => {},
        }
    }
    
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`)

    function fetchGithubUser() {
        mutate()
    }

    return {
        users: data,
        error,
        isLoading: !data && !error,
        onfetchUser: fetchGithubUser,
    } 
}