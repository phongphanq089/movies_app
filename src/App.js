import React from "react";
import "./app.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Movies from "./page/Movies/Movies";
import Search from "./page/Movies/Movies";
import Trending from "./page/Trendding/Trending";
import TVshow from "./page/TVshow/TVshow";
import Header from "./compoment/Header/Header";
import Footer from "./compoment/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TVshow />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
