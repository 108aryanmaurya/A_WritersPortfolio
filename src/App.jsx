import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <ScrollProgress />
      <main className="container select-none">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Blog" element={<Blog></Blog>} />
          <Route path="/About" element={<About></About>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </main>
    </Router>
  );
};

export default App;
