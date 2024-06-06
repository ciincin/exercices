//Fetch user info
//show user info on screen

import { useEffect } from "react";
import { useState } from "react";

function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, [username]); 

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} alt="avatar" />
        </div>
      ) : (
        <p>No user available</p>
      )}
    </div>
  );
}

export default GithubUser;
