import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  HAS_ERROR,
  SET_LOADING,
  CURRENT_MOVIE
} from "../actions/types";

const intialState = {
  searchTerm: "",
  movies: [],
  loading: false,
  hasError: false,
  movie: [],
};

const searchReducer = (state = intialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        searchTerm: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case CURRENT_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };  

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case HAS_ERROR:
      return {
        ...state,
        hasError: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
