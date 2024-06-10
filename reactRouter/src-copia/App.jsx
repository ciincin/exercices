import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./component/Welcome";
import Container from "./component/container/Container";
import Login from "./component/Login";
import Catalogue from "./component/Catalogue";
import Product from "./component/Product";

function App() {
  return (
    <>
      <Container
        title={
          <div>
            <h1>My awesome App</h1>
            <div>
              <Link to="/">Home</Link> | <Link to="products">Products</Link>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path='/:name' element={<Welcome  />} />
          <Route path='login' element={<Login/>}/> */}
          <Route path="products" element={<Catalogue />}>
            <Route index element={<p>Pease, select a product</p>} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <p>Not found</p>
                <Link to="/">Go Home</Link>
              </div>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
