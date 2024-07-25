import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

function User() {
    const [user, setUser]= useState([])
    const {id} = useParams()


    async function fetchUsersById() {
        const data = await fetch(`http://localhost:3000/users/${id}`);
        const userData = await data.json();
        setUser(userData);
      }

      useEffect(() => {
        fetchUsersById();
      }, []);

  return (
    <div>
        {user && user.map((user, index)=>(
            <div key={index}>
            <Link to={`/users/${user.id}`}>
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            </Link>
            </div>

        )) }

    </div>
  )
}

export default User
