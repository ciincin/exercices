import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRememberChange(event) {
    setRemember(event.target.checked);
    console.log(remember);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password, remember);
  }

  function resetForm() {
    setUsername("");
    setPassword("");
    setRemember(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label htmlFor="remember">Remember:</label>
      <input
        type="checkbox"
        id="remember"
        checked={remember}
        onChange={handleRememberChange}
      />
      <button disabled={!username || !password}>Login</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}

export default Login;
