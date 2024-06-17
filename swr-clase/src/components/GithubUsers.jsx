import { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUsers() {
  const [username, setUsername] = useState("");

  const [usernamesList, setUsernamesList] = useState([]);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsernamesList((currentList) => [...currentList, username]);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleUsernameChange}
          value={username}
          type="text"
          placeholder="Enter a Github username"
        />
        <button>Submit</button>
      </form>
      <ul>
        {usernamesList.map((item, index) => {
          return (
            <li key={index}>
              <GithubUser username={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GithubUsers;
