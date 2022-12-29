import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function MovieListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  useEffect(() => {
    let term = localStorage.getItem("searchTerm");
    if (term) {
      fetchMovies(term);
    }
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearResults = () => {
    setMovies([]);
    setSearchTerm("");
    localStorage.removeItem("searchTerm");
  };

  const fetchMovies = (movieName) => {
    const searchURL = ` http://www.omdbapi.com/?s=${movieName}&page=2&apikey=b0d2b119&
  `;

    localStorage.setItem("searchTerm", movieName);
    fetch(searchURL)
      .then((response) => response.json())
      .then((result) => {
        if (result.Error) {
          setMovies([]);
          setNoMoviesFound(true);
        } else {
          setMovies(result.Search);
          setNoMoviesFound(false);
        }
      });
  };

  const movieItems = movies.map((movie) => {
    return (
      <div key={movie.imdbID}>
        <img src={movie.Poster} alt='' />
        <h3>{movie.Title}</h3>
        <NavLink to={`/${movie.imdbID}`}>
          <button>Details</button>
        </NavLink>
      </div>
    );
  });
  return (
    <div>
      <section class='jumbotron text-center'>
        <div class='container'>
          <h1 class='jumbotron-heading'>Movie Search</h1>
          <p class='lead text-muted'>
            Start a search see what you will be watching tonight!
          </p>

          <input type='text' onChange={handleSearchTermChange} placeholder="Search movies, actors or more.." />
          <p>
          <button onClick={() => fetchMovies(searchTerm)} class='btn btn-primary my-2 me-2'>Search</button>
      <button onClick={clearResults} class='btn btn-secondary my-2'>Clear Results</button>
          </p>
        </div>
      </section>
      
      
      
      {movieItems}
      {noMoviesFound ? <h1>No Movies Found</h1> : null}
    </div>
  );
}

export default MovieListPage;
