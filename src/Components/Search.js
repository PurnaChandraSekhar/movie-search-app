import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from './spinner';
import { searchMovie, fetchMovie, setLoading } from "../actions/searchAction";
import MovieContainer from "./MovieContainer";


class Search extends Component {
  handleChange = (e) => {
    // searchMovie dispatcher
    this.props.searchMovie(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.props.searchTerm === "") {
      return alert("Please enter a movie name");
    }else {
    this.props.setLoading();
    return this.props.fetchMovie(this.props.searchTerm);
    }
  };

  render() {
    const { loading } = this.props;
    return (
      <>
        <div className="search-bar">
          <h2 className="search-bar__title">
            Get the details of your favourite movie now.
          </h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="search-bar__input"
              placeholder="Search..."
              name="searchTerm"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </form>
        </div>
        { loading ? <Spinner/> : <MovieContainer /> }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.search.searchTerm,
  loading: state.search.loading,
  hasError: state.search.hasError
});

export default connect(mapStateToProps, { searchMovie, fetchMovie, setLoading })(Search);
