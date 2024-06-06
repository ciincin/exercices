import "./App.css";
import Container from "./components/container/Container";

function App() {
  return (
    <>
      {/* <Container title={"This is the collapsable title"} /> */}
      <Container title="Click here to see the children">
        <h2>This is the children</h2>
      </Container>
    </>
  );
}

export default App;
