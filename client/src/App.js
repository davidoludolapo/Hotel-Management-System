import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes> 
  );
}

export default App;
