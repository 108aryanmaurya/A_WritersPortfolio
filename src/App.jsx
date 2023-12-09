import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import ScrollProgress from "./components/ScrollProgress";
import SideNav from "./components/SideNav";
const App = () => {
  return (
    <main className="bg-slate-300/20 select-none ">
      <Router>
        <Navbar></Navbar>
        <ScrollProgress />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Blog" element={<Blog></Blog>} />
          <Route path="/About" element={<About></About>} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </Router>
    </main>
  );
};

export default App;
