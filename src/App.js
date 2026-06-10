import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Netflix from "./Netflix";
import Prime from "./Prime";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/prime" element={<Prime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;