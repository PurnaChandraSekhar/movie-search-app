import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MovieCard = ({ movie }) => {
    const { Title, Poster, Year, imdbID } = movie;
  return (
    <div className="card">
      <img src={Poster} alt="movies" className="card__img" />
      <h3 className="card__heading">
        {Title} - {Year}
      </h3>
      <Link className="btn btn-details" to={`/movie/${imdbID}`}>
        Know More <i className="fas fa-chevron-right"></i>
      </Link>
    </div>
  );
};

export default MovieCard;
