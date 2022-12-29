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
        <div class='row justfiy-content-center'>
          <div class='col col-lg-3'>
            <div class='card mb-4 box-shadow '>
              <img
                class='card-img-top '
                src={
                  movie.Poster === "N/A" ? "/missingmovie.jpg" : movie.Poster
                }
                alt=''
              />

              <div class='card-body'>
                <p class='card-text'>
                  <h2>{movie.Title}</h2>
                </p>
                <div class='d-flex justify-content-between align-items-center'>
                  <div class='btn-group'>
                    <NavLink to={`/${movie.imdbID}`}>
                      <button>Details</button>
                    </NavLink>
                  </div>
                  <small class='text-muted'>{movie.Year}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <section class='jumbotron text-center'>
        <div class='container'>
          <h1 class='jumbotron-heading'>Movie Search</h1>
          <p class='lead text-muted'>
            Start a search and see what you will be watching tonight!
          </p>

          <input
            type='text'
            onChange={handleSearchTermChange}
            placeholder='Search movies, actors or more..'
          />
          <p>
            <button
              onClick={() => fetchMovies(searchTerm)}
              class='btn btn-primary my-2 me-2'
            >
              Search
            </button>
            <button onClick={clearResults} class='btn btn-secondary my-2'>
              Clear Results
            </button>
          </p>
        </div>
      </section>

      {/* ------------------------ */}

      {/*       
<div class="album py-5 bg-light">
        <div class="container"> */}
      <div class='album py-5 bg-light'>
        <div class='container'>{movieItems}</div>
      </div>
      {noMoviesFound ? <h1>No Movies Found</h1> : null}
    </div>
  );
}

export default MovieListPage;
