
import useSWR from "swr"

const fetcher = (url)=> fetch(url).then(resp=>resp.json())


function useGithubUser( username ) {
  const {data, error, isLoading} = useSWR(username?`https://api.github.com/users/${username}`:null, fetcher)

  return {
    data,
    error,
    isLoading,
  };
}

export default useGithubUser;
