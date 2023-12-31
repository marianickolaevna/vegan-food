import React from "react";
import "./App.css";
import "./Rec.css";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "./components/Hero.tsx";
import Menu from "./components/Menu.tsx";
import Meal from "./components/Meal.tsx";
import ScrollToTop from "./scrollToTop.js";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/meal" element={<Meal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
