import React from "react";
import { useEffect, useState } from "react";
// import {useParams} from "react-router-dom"

function MovieDetailPage(props) {
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    const imdbId = props.match.params.imdbId;
    fetchMovieDetailsById(imdbId);
  }, []);
  const fetchMovieDetailsById = (imdbId) => {
    const movieDetailsURL = ` http://www.omdbapi.com/?i=${imdbId}&apikey=b0d2b119&`;

    fetch(movieDetailsURL)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setMovieDetail(result);
      });
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <img src={movieDetail.Poster} alt='' />
          <h5>{movieDetail.Title}</h5>
          <p>Released:{movieDetail.Released}</p>
          <p>Director{movieDetail.Director}</p>
          <p>Actors:{movieDetail.Actors}</p>
          <p>Awards:{movieDetail.Awards}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
