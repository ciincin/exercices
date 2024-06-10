import { Link, useNavigate, useParams } from "react-router-dom"

function Welcome() {
    const {name ="World"} = useParams()
    const navigate =useNavigate()

    function handleLoginButtonClick(){
        navigate("/login")
    }
  return (
    <div>
        <div>Welcome, {name} !</div>
        {/* <Link to="/login">Login to the app</Link> */}
        <div>
            <button onClick={handleLoginButtonClick}>Enter the app</button>
        </div>
    </div>
  )
}

export default Welcome