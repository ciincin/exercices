function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();

    // const username = event.target.elements.namedItem("username").value
    // const password = event.target.elements.namedItem("password").value
    // const remember = event.target.elements.namedItem("remember").checked

    // const data ={
    //   username,
    //   password,
    //   remember
    // }

    const formData = new FormData(event.target); 

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("checkbox") === "on" ? true : false,
    };

    // Pros: Ease of use, Multipart form submission, dynamic data manipulation, AJAX compatibility and Cross-browser support
    // Cons: Limited browser support for some features, lack of direct JSON support, file API dependency, Debugging challenges and no direct method for cloning or serializing
    console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>My uncontrolled form</h1>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <label htmlFor="remember">Remember</label>
      <input type="checkbox" name="remember" id="remember" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default UncontrolledLogin;
