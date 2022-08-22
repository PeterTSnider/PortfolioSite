import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/global";
import Landing from "./pages/Landing";
import Creds from "./pages/Creds"
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/creds" element={<Creds/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
};
export default App;
