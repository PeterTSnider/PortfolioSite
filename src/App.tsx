import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/global";
import Landing from "./pages/Landing";
import Creds from "./pages/Creds";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/creds" element={<Creds />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};
export default App;
