import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./component/Welcome";
import { Counter } from "./component/Counter";
import ShowGithubUser from "./component/ShowGithubUser";
import GithubUserList from "./component/GithubUserList";
import Header from "./component/Header";
import ErrorNotFound from "./component/ErrorNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome name="ciincin" />} />

          <Route path="counter" element={<Counter />} />

          <Route path="/users" element={<GithubUserList />}>
            <Route
              index
              element={
                <div>
                  <p>Add a user and select it</p>
                </div>
              }
            />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>

          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
