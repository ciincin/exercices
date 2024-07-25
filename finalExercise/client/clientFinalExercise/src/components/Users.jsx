import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const data = await fetch("http://localhost:3000/users");
    const userData = await data.json();
    setUsers(userData);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // fetch("http://localhost:3000/users")
  // .then((resp)=> resp.json())
  // .then((data)=> console.log(data))

  return (
    <>
      <h1>Users</h1>

        {users && users.map((user, index) => (
          <div key={index}>
            <Link to={`/users/${user.id}`}>
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            </Link>
            </div>
          ))}

    </>
  );
}

export default App;
