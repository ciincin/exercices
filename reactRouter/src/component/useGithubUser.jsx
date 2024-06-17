import { useEffect } from "react";
import { useState } from "react";

function useGithubUser({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);

  // async function fetchUserData() {
  //   if (username) {
  //     try {
  //       setLoad(true);
  //       const response = await fetch(`http://api.github.com/users/${username}`);
  //       if (response.status !== 200) {
  //         setError(new Error());
  //       }

  //       const responseJson = await response.json();
  //       setData(responseJson);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoad(false);
  //     }
  //   } else {
  //     console.log("there is no username");
  //   }
  // }

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  useEffect(()=>{
    setLoad(true)
    fetch(`http://api.github.com/users/${username}`)
      .then((resp)=> resp.json())
      .then(respJSON => setData(respJSON))
      .catch(err => setError(err))
      .finally(setLoad(false))
  }, [username])

  return {
    data: data,
    load: load,
    error: error,
  };
}

export default useGithubUser;
