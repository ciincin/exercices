import { useEffect } from "react";
import useGithubUser from "./useGithubUser";


function GithubUser({ username }) {

 const {data, load, error, fetchUserData} = useGithubUser(username)

 useEffect(()=>{
  fetchUserData()
 }, [username])

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
      {error && <p>{`${error.status} ${error.message}`}</p>}
      {load && <p>Loading...</p>}
    </div>
  );
}

export default GithubUser;
