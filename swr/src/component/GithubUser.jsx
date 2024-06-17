import useGithubUser from "./useGithubUser";


function GithubUser({ username }) {

 const {data, error, isLoading, refetch} = useGithubUser(username)


  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.status ===404? "User not found": `An error occurred: ${error.message}`}</p>}
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} alt="avatar" />
        </div>
      ) : (
        <p>Please, enter a valid username</p>
      )}
      
      
      <button onClick={refetch}>Refetch Data</button>
      
    </div>
  );
}

export default GithubUser;
