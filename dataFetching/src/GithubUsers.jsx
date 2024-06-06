import { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUsers() {
    const [username, setUsername]= useState("")
    const [confirmedUsername, setConfirmedUsername] = useState("")
    const [usernamesList, setUsernamesList] = useState([])

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setConfirmedUsername(username)
        if(username.trim() !== ""){
          setUsernamesList([...usernamesList, username])
          setUsername("")
        }
        // console.log(username);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleUsernameChange} value={username} type="text" placeholder="Enter a Github username" />
          <button>Submit</button>
        </form>
        <ul>
            {usernamesList.map((username, index)=> (
              <li key={index}>
                <GithubUser username={username} />
              </li>
            ))}

        </ul>
        
    </div>
  );
}

export default GithubUsers;
