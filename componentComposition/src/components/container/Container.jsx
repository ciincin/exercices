import { useState } from "react";
import "./Container.css";
function Container({ title }) {
  const [isShowing, setIsShowing] = useState(false);

  function handleIsShowing() {
    setIsShowing(!isShowing);
  }

  return (
    <div className="div-style1">
      <h1 onClick={handleIsShowing}>Title</h1>
      {isShowing ? <p>{title}</p> : null}
    </div>
  );
}

export default Container;
