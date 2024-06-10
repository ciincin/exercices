import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

function GithubUserList() {

    const [users, setUsers]= useState([])
    const [loading, setLoading] =useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        setLoading(true);
        fetch(`https://api.github.com/users`)
        .then((response => response.json()))
        .then((json)=> setUsers(json))
        .catch((err)=>setError(err))
        .finally(()=> setLoading(false))
    }, [])

  return (
    <div>
        {users.length && (
            <ul>
                {users.map((user)=> 
                <li key={user.id}>
                    <Link to={`/users/${user.login}`}>{user.login}</Link>
                </li>)}
            </ul>
        )}
        
        {error&& <div>{error.message}</div>}
        {loading && <div>Loading...</div>}

        <Outlet/>
    </div>
  )
}

export default GithubUserList