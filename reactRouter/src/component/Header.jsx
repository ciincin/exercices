import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users">Users</Link>


    </div>
  )
}

export default Header