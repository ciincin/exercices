
import './App.css'
import  Welcome  from "./Welcome";
import AlertClock from "./AlertClock"
import {Counter} from "./Counter"
import Clock from "./Clock";
import MouseClicker from "./MouseClicker";

function App() {
  return (
    <div>
      <h1>My awesome app</h1>
      <hr />
      <Welcome name="John" age={29} />
      <AlertClock/>
      <Counter />
      <Clock />
      <MouseClicker />
    </div>
  );
}

export default App