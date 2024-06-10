
import "./Container.css";
function Container({ title, children }) {
 
  return (
    <div className="div-style1">
      <h1>Title: {title}</h1>
      <div>{children} </div>
    </div>
  );
}

export default Container;
