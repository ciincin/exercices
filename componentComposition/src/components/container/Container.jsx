import { useState } from "react";
import "./Container.css";
function Container({ title, children }) {
  const [isShowing, setIsShowing] = useState(false);

  function handleIsShowing() {
    setIsShowing(!isShowing);
  }

  return (
    <div className="div-style1">
      <h1 onClick={handleIsShowing}>Title: {title}</h1>
      {isShowing ? <div>{children} </div>: null}
    </div>
  );
}

export default Container;
