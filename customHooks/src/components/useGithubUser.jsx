
import { useState } from "react";

function useGithubUser( username ) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);

  async function fetchUserData() {
    if (username) {
      try {
        setLoad(true);
        const response = await fetch(`http://api.github.com/users/${username}`);
        if (response.status !== 200) {
          const errorBody = await response.json()
          console.log(errorBody);
          setError(errorBody);
          return
        }

        const responseJson = await response.json();
        setData(responseJson);
      } catch (error) {
        setError(error);
      } finally {
        setLoad(false);
      }
    } else {
      console.log("there is no username");
    }
  }


  return {
    data: data,
    load: load,
    error: error,
    fetchUserData: fetchUserData,
  };
}

export default useGithubUser;
