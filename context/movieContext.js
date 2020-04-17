import { createContext, useReducer, useEffect } from "react";
import { initialState, moviesReducer } from "../reducers/moviesReducer";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [moviesState, dispatch] = useReducer(moviesReducer, initialState);
  const {page} = moviesState;

  useEffect(() => {
    const getData = (async function () {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=4cdf98dae1ad5192544b610b08d033c5&page=${page}`
      );
      const data = await res.json();
      return dispatch({
        type: "GET_DATA",
        movies: data.results,
        page: data.page,
        total_pages: data.total_pages
      });
    })();
    const getGenres = (async function () {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=4cdf98dae1ad5192544b610b08d033c5&language=pt-BR"
      );
      const data = await res.json();
      return dispatch({
        type: "GET_GENRES",
        genres: data.genres
      });
    })();
  }, [page]);

  return (
    <MovieContext.Provider
      value={{moviesState, dispatch}}>
        {props.children}
    </MovieContext.Provider>
  )
};

export default MovieContextProvider;