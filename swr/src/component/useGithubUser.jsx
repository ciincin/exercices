
import useSWR from "swr"
const fetcher = async (url) =>{ 
  const response = fetch(url)
if(!response){
  const error = new Error("An error occurred fetching the data");
  error.status= response.status;
  error.info = response.info;
  throw error
}

return (await response).json()

}




function useGithubUser( username ) {
  const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)

  return {
    data: data,
    load: !data && !error,
    error: error,
    
  };
}

export default useGithubUser;
