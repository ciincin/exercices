import "./App.css";
import Home from "../src/views/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./views/Admin";
import Error404 from "./views/Error404";
import User from "./views/User";


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/users/:id" element={<User/>}/>
    <Route path="*" element={<Error404/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
