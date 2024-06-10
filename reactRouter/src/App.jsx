import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./component/Welcome";
import { Counter } from "./component/Counter";
import ShowGithubUser from "./component/ShowGithubUser";
import GithubUserList from "./component/GithubUserList";

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
              <Link to="/users">Go to your page</Link>
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
              <Link to="/users">Go to your page</Link>
            </div>
          }
        />

        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<div><p>Add a user and select it</p></div>}/>
          <Route path=":username" element={<div>
            <ShowGithubUser />
            <Link to="/">Back Home</Link>
            <hr />
            <Link to="/counter">Go to counter</Link>
          </div>} />
        </Route>

        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
    </>
  );
}

export default App;
