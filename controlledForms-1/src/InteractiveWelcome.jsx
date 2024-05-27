import { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleName(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
    <>
      <input value={name} onChange={handleName} />
      <Welcome name={name} />
    </>
  );
}

export default InteractiveWelcome;
