import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Pros from "./pages/pros";
import Cons from "./pages/cons";
import Society from "./pages/society";
import ItIndustry from "./pages/itindustry";

//Checks for system theme
function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pros" element={<Pros />} />
        <Route path="/cons" element={<Cons />} />
        <Route path="/society" element={<Society />} />
        <Route path="/it-industry" element={<ItIndustry />} />
      </Routes>
    </Router>
  );
}

export default App;
