import Age from "./Age";

function Welcome({ name = "everyone", age }) {
  return (
    <div>
      <p>Welcome <strong>{name}</strong> !</p>
      
      {age >18 ? <Age age={age}/> : <p>You are very young!</p> }
      
    </div>
  );
}

export default Welcome;
