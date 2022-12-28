import React from "react";
import { useEffect } from "react";

function MovieDetailPage(props) {
  useEffect(() => {
    const imdbId = props.match.params.imdbId;
    fetchMovieDetailsById(imdbId);
  });
  const fetchMovieDetailsById = (imdbId) => {
    const movieDetailsURL = ` http://www.omdbapi.com/?i=${imdbId}&apikey=b0d2b119&`;

    fetch(movieDetailsURL)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // setMovies(result.imdbId);
      });
  };
  return <div>MovieDetailPage</div>;
}

export default MovieDetailPage;
