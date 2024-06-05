import Login from "./components/Login";
import "./App.css";
import InteractiveWelcome from "./components/InteractiveWelcome";
import UncontrolledLogin from "./components/UncontrolledLogin";

function App() {
  return (
    <>
      <InteractiveWelcome />
      <Login />
      <UncontrolledLogin />
    </>
  );
}

export default App;
