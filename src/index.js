import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieListPage from './components/MovieListPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieListPage />
  </React.StrictMode>
);

