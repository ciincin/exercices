import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./component/Welcome";
import { Counter } from "./component/Counter";
import ShowGithubUser from "./component/ShowGithubUser";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Welcome name="ciincin" />
              <Link to="counter">Go to counter</Link>
              <hr />
              <Link to="/users/ciincin">Go to your page</Link>
            </div>
          }
        />
        <Route
          path="counter"
          element={
            <div>
              <Counter />
              <Link to="/">Back Home</Link>
              <hr />
              <Link to="/users/ciincin">Go to your page</Link>
            </div>
          }
        />
        <Route
          path="/users/:username"
          element={
            <div>
              <ShowGithubUser />
              <Link to="/">Back Home</Link>
              <hr />
              <Link to="/counter">Go to counter</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
