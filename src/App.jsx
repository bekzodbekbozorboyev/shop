import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./router/home/Home";
import About from "./router/about/About";
import SinglePage from "./router/singlePage/SinglePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/single-page/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
