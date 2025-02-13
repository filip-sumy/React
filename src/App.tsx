import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const Home = () => <h2>Це домашня сторінка</h2>;
const About = () => <h2>Це сторінка про нас</h2>;
const Contact = () => <h2>Це контактна сторінка</h2>;

const Navigation = () => (
  <nav>
    <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>Головна</NavLink> |
    <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>Про нас</NavLink> |
    <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>Контакти</NavLink>
  </nav>
);

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
