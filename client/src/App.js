import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";

//pages
import Dashboard from "./pages/Dashboard";
import PageError from "./pages/PageError";
import Faq from "./pages/Faq";
import Coin from "./pages/Coin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/:coin" element={<Coin />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
