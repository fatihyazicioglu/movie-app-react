import React, { useState } from "react";

function MovieListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const fetchMovies = (movieName) => {
    const searchURL = ` http://www.omdbapi.com/?s=${movieName}&page=2&apikey=b0d2b119&
  `;
    fetch(searchURL)
      .then((response) => response.json())
      .then((result) => {
        setMovies(result.Search);
      });
  };

  const movieItems = movies.map((movie) => {
    return (
      <div >
        <img src={movie.Poster} alt='' />
        <h3>{movie.Title}</h3>
      </div>
    );
  });
  return (
    <div>
      <h1>Movie List Page</h1>
      Search <input type='text' onChange={handleSearchTermChange} />
      <button onClick={() => fetchMovies(searchTerm)}>Search</button>
      {movieItems}
    </div>
  );
}

export default MovieListPage;
