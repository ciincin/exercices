function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)

      console.log(event.target);
    const data = {
      username:formData.get("username"),
      password:formData.get("password"),
      remember:formData.get("remember"),
    }
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" />

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" />

      <label htmlFor="remember">Remember:</label>
      <input type="checkbox" name="remember" id="remember" />
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default UncontrolledLogin;
