//Fetch user info
//show user info on screen

import { useEffect } from "react"
import { useState } from "react"

function GithubUser2({username}) {

    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch(`http://api.github.com/users/${username}`)
        .then((response)=> response.json())
        .then ((json)=> {
            setData(json)
            console.log(json);
        })
    },[username])


  return (
    <div>
       {data ? <div><h1>{data.name}</h1> 
       <img src={data.avatar_url} alt="avatar" /></div> : <p>No user</p>}
    </div>
  )
}

export default GithubUser2