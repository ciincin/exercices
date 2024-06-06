import { useState } from "react";
import GithubUser2 from "./GithubUser2";

function GithubUsers() {
    const [username, setUsername]= useState("")

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(username);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleUsernameChange} value={username} type="text" placeholder="Enter a Github username" />
          <button>Submit</button>
        </form>
        <GithubUser2 username={username} />
    </div>
  );
}

export default GithubUsers;
