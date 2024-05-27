import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function updateUsername(event) {
    setUsername(event.target.value);
    console.log(username);
  }

  function updatePass(event) {
    setPassword(event.target.value);
  }

  function updateRemember(event) {
    setRemember(event.target.value);
  }

  return (
    <>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={updateUsername}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={updatePass}
        />

        <label htmlFor="remember">Remember:</label>
        <input
          type="checkbox"
          id="remember"
          value={remember}
          onChange={updateRemember}
        />
        <button disabled= {!username || !password}>Login</button>
      </form>
    </>
  );
}

export default Login;
