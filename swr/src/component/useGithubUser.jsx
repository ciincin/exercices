
import useSWR, { mutate } from "swr"

const fetcher = async (url)=> {
  const response= await fetch(url)
  if(!response.ok){
    const error = new Error("An error occurred while fetching the data")
    error.status= response.status
    error.info= await response.json()
    throw error
  }
  return response.json()
}

function useGithubUser( username ) {
  const {data, error, isLoading} = useSWR(username?`https://api.github.com/users/${username}`:null, fetcher)

  const refetch = () =>{
    if (username) {
      mutate(`https://api.github.com/users/${username}`)
    }
  }

  return {
    data,
    error,
    isLoading,
    refetch,
  };
}

export default useGithubUser;
