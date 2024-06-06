import { useState } from "react";
import { useEffect } from "react";

function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("User not found"));
        }
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((err) => {
        setError(err);
      });
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name} - {data.login}</h1>}
    </div>
  );
}

export default GithubUser;
