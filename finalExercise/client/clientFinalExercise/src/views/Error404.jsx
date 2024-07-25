import { Link } from "react-router-dom"

function Error404() {
  return (
    <div>
       <h1>Error 404, Route not found</h1>
        <Link to="/">Go Home!</Link>
    </div>
  )
}

export default Error404
