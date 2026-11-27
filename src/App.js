import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MA1600V/570-product" element={<Page1 />} />
        <Route path="/ZE4500VF-1700hs-product" element={<Page2 />} />
        <Route path="/MA4800V/3200h-product" element={<Page3 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
