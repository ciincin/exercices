import useForm from "./useForm"

function Form({user, pass}) {
const {username, password, onChangeUsername,onChangePassword}= useForm(user, pass)

  return (
    <div>
        <form>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={username} onChange={onChangeUsername}/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={onChangePassword} />
        </form>
    </div>
  )
}

export default Form