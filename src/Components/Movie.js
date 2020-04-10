import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "./spinner";
import { currentMovie, setLoading } from "../actions/searchAction";

const Movie = ({
  movie,
  match: {
    params: { imdbID },
  },
  currentMovie,
  setLoading,
  loading,
}) => {
  useEffect(() => {
    setLoading();
    currentMovie(imdbID);
    //eslint-disable-next-line
  }, []);

  const {
    Title,
    Year,
    Released,
    Runtime,
    Poster,
    Genre,
    Actors,
    imdbRating,
  } = movie;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/" className="btn btn-back">
            Back
          </Link>
          <div className="movie-card-container">
            <img src={Poster} className="movie-card__img" alt="movie" />
            <table>
              <tbody>
                <tr>
                  <th>
                    <h2 className="movie-card__title">Title : </h2>
                  </th>
                  <td>{Title}</td>
                </tr>
                <tr>
                  <th>
                    <h2 className="movie-card__title">Year : </h2>
                  </th>
                  <td>{Year}</td>
                </tr>
                <tr>
                  <th>
                    <h2 className="movie-card__title">Released : </h2>
                  </th>
                  <td>{Released}</td>
                </tr>
                <tr>
                  <th>
                    <h2 className="movie-card__title">Runtime : </h2>
                  </th>
                  <td>{Runtime}</td>
                </tr>
                <tr>
                  <th>
                    <h2 className="movie-card__title">Genre : </h2>
                  </th>
                  <td>{Genre}</td>
                </tr>
                <tr>
                  <th>
                    <h2 className="movie-card__title">Actors : </h2>
                  </th>
                  <td>{Actors}</td>
                </tr>
                <tr>
                  <th>
                    <h2 className="movie-card__title">IMDB Rating : </h2>
                  </th>
                  <td>{imdbRating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.search.movie,
  loading: state.search.loading,
});

export default connect(mapStateToProps, { currentMovie, setLoading })(Movie);
