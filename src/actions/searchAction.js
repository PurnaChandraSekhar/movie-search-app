import {SEARCH_MOVIE, FETCH_MOVIES, HAS_ERROR, SET_LOADING, CURRENT_MOVIE} from '../actions/types';
import { API_KEY } from './API';

export const searchMovie = searchTerm => dispath => {
   try {
    dispath( {
        type: SEARCH_MOVIE,
        payload: searchTerm
    } );
   } catch (error) {
       dispath({
           type: HAS_ERROR,
           payload: error.response.statusText
       })
   }
};

export const fetchMovie = searchTerm => async dispatch => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    const data = await res.json();

    dispatch({
        type: FETCH_MOVIES,
        payload: data.Search
    });
  }
  catch(error) {
      console.log(error);
      dispatch({
          type: HAS_ERROR,
          payload: error.Response
      })
  }
     
}

//FETCH SELECTED MOVIE DETAILS
export const currentMovie = id => async dispatch => {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        const data = await res.json();

        dispatch({
            type: CURRENT_MOVIE,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: HAS_ERROR,
            payload: error.Response
        })
    }
}

export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}