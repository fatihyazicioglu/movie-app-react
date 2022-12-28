import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MovieListPage from "./components/MovieListPage";
import MovieDetailPage from "./components/MovieDetailPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MovieListPage/>} />
        <Route  path='/:imdbId' element={<MovieDetailPage/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
