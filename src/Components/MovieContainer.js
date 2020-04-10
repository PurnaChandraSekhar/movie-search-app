import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import "../App.css";

const MovieContainer = ({movies, hasError}) => {
  if (hasError || movies === undefined) {
    return (
        <div className="error-msg">
            <h1>Movie Not Found!</h1>
        </div>
    );
  } else {
    let content = "";

    content =
      movies.length > 0
        ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
        : "";

    return <div className="container">{content}</div>;
  }
};

const mapStateToProps = (state) => ({
  movies: state.search.movies,
  loading: state.search.loading,
  hasError: state.search.hasError,
});

export default connect(mapStateToProps)(MovieContainer);
