import { useState } from "react";

function useForm (){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleChangeUsername(e){
        setUsername(e.target.value)
    
    }

    function handleChangePassword(e){
        setPassword(e.target.value)
       
    }

    return {
        username:username,
        password:password,
        onChangeUsername: handleChangeUsername,
        onChangePassword: handleChangePassword,
    }
}

export default useForm